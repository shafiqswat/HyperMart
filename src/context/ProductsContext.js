import React, { createContext, useContext, useEffect, useState } from 'react';
import { Products } from '../assets/constants/Dummy';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData();
  }, [storeData]);

  const storeData = async value => {
    console.log(value);
    try {
      const updatedCart = [...cart];
      const index = updatedCart.findIndex(p => p.id == value.id);
      if (index >= 0) {
        updatedCart[index].qty = value.qty;
        updatedCart[index].price = value.qty * value.price;
      } else {
        updatedCart.push({ ...value, qty: value.qty });
      }
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('cart');
      if (value) {
        setCart(JSON.parse(value));
      }
    } catch (err) {
      console.log('Fetch error:', err);
    }
  };

  const values = {
    products,
    setProducts,
    storeData,
    cart,
  };
  console.log('cart p', cart);
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

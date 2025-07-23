import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Heading from '../components/Heading';
import { RightArrow } from '../assets/images';
import { CartCard } from '../components/CartCard';
import { Colors } from '../assets/constants/Color';
import { useProducts } from '../context/ProductsContext';

export const Cart = () => {
  const { products } = useProducts();
  return (
    <View style={styles.cartContainer}>
      <View style={styles.headingContainer}>
        <Heading heading="Popular Deals" />
        <RightArrow />
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={items => items.id}
        data={products}
        renderItem={({ item }) => <CartCard items={item} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    height: '100%',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

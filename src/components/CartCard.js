import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Label } from './Label';
import { Fonts } from '../assets/constants/Fonts';
import { Colors } from '../assets/constants/Color';
import {
  FavoriteFill,
  FavoriteIcon,
  Minus,
  Plus,
  Star,
} from '../assets/images';
import { useProducts } from '../context/ProductsContext';
const windowWidth = Dimensions.get('window').width;

export const CartCard = ({ items }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [qty, setQty] = useState(0);
  const { storeData, cart } = useProducts();
  console.log(cart);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCart = async val => {
    const newQty = qty + 1;
    setQty(newQty);
    await storeData({ ...val, qty: newQty });
  };

  const handlePlus = async val => {
    const newQty = qty + 1;
    setQty(newQty);
    await storeData({ ...val, qty: newQty });
  };

  const handleMinus = async val => {
    if (qty > 0) {
      const newQty = qty - 1;
      setQty(newQty);
      await storeData({ ...val, qty: newQty });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={items?.imgPath} style={styles.img} />
      </View>
      <Label label={items?.title} style={styles.title} />
      <View style={styles.priceContainer}>
        <Label
          label={`₹ ${qty > 1 ? items?.price * qty : items?.price}`}
          style={styles.price}
        />
        <View style={styles.ratingContainer}>
          <Label label={items?.rating} style={styles.rating} />
          <Star />
        </View>
      </View>
      <View style={styles.btnContainer}>
        {qty < 1 && (
          <TouchableOpacity
            style={[styles.cartBtn]}
            onPress={() => handleCart(items)}
          >
            <Label label="Add to cart" style={styles.cartText} />
          </TouchableOpacity>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {qty > 0 && (
            <>
              <TouchableOpacity
                style={styles.plusContainer}
                onPress={() => handleMinus(items)}
              >
                <Minus />
              </TouchableOpacity>
              <Label
                label={qty}
                style={{ fontSize: 14, fontFamily: Fonts.SANS_SEMI_BOLD }}
              />
              <TouchableOpacity
                style={styles.plusContainer}
                onPress={() => handlePlus(items)}
              >
                <Plus />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.favoriteIconStyle,
          isFavorite && styles.filledHeartBackground,
        ]}
        onPress={handleFavorite}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteFill />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.FULL_GRAY,
    width: windowWidth * 0.42,
    position: 'relative',
    marginBottom: 30,
  },
  img: {
    borderRadius: 12,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imgContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.SANS_REGULAR,
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    fontFamily: Fonts.SANS_BOLD,
  },
  rating: {
    color: Colors.TOMATO,
    fontSize: 12,
    fontFamily: Fonts.SANS_SEMI_BOLD,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  cartText: {
    color: Colors.SANDY_ORANGE,
    fontSize: 14,
    fontFamily: Fonts.SANS_SEMI_BOLD,
  },
  btnContainer: {
    padding: 10,
  },
  cartBtn: {
    borderWidth: 1,
    borderColor: Colors.SANDY_ORANGE,
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
  },
  favoriteIconStyle: {
    position: 'absolute',
    left: 5,
    top: 5,
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  plusContainer: {
    backgroundColor: Colors.TOMATO,
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

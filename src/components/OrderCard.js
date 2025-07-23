import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../assets/constants/Color';
import { Label } from './Label';
import { Fonts } from '../assets/constants/Fonts';
import { OrderProduct } from '../assets/constants/Dummy';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../assets/constants/Routes';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export const OrderCard = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.OrderCard}>
      <View style={styles.CardContainer}>
        <Label
          label="Delivered"
          style={{ color: Colors.GREEN, fontFamily: Fonts.SANS_BOLD }}
        />
        <Label
          label="On Wed, 27 Jul 2022"
          style={{ color: Colors.DARK, fontFamily: Fonts.SANS_BOLD }}
        />
        <View style={styles.orderContent}>
          {OrderProduct.map((item, i) =>
            item.ImagePath ? (
              <Image source={item.ImagePath} key={i} />
            ) : (
              <TouchableOpacity onPress={() => navigate.navigate(Screens.CART)}>
                <Label
                  label={item.text}
                  key={i}
                  style={{
                    fontSize: 12,
                    fontFamily: Fonts.SANS_MEDIUM,
                    width: 35,
                    textAlign: 'center',
                  }}
                />
              </TouchableOpacity>
            ),
          )}
        </View>

        <View style={styles.btnContainer}>
          <View>
            <Label
              label="Order ID : #28292999"
              style={{ fontFamily: Fonts.SANS_BOLD }}
            />
            <Label
              label="Final Total : ₹ 123"
              style={{ fontSize: 16, fontFamily: Fonts.SANS_BOLD }}
            />
          </View>
          <TouchableOpacity style={styles.btnStyle}>
            <Label
              label="Order Again"
              style={{
                color: Colors.WHITE,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.discountCard}>
          <Label
            label="Order Again & Get Flat 10% OFF"
            style={{
              color: Colors.WHITE,
              fontFamily: Fonts.SANS_BOLD,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OrderCard: {
    // borderWidth: 2,
    position: 'relative',
    marginTop: 20,
    padding: 14,
    borderRadius: 16,
    // height: windowHeight * 0.24,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
  },
  CardContainer: {
    width: windowWidth * 0.7,
  },
  orderContent: {
    flexDirection: 'row',
    backgroundColor: Colors.GRAY,
    height: windowHeight * 0.1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnStyle: {
    backgroundColor: Colors.TEAL_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 12,
  },
  discountCard: {
    position: 'absolute',
    width: windowWidth * 0.516,
    top: 63,
    right: -130,
    backgroundColor: Colors.TOMATO,
    padding: 10,
    borderEndEndRadius: 10,
    borderStartEndRadius: 10,
    transform: [{ rotate: '-90deg' }],
  },
});

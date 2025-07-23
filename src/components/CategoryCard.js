import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Grocery } from '../assets/images';
import { Label } from './Label';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { Colors } from '../assets/constants/Color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const CategoryCard = ({ label, Icon, style }) => {
  return (
    <View style={[styles.card, style]}>
      {Icon}
      <Label label={label} style={{ color: Colors.WHITE }} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.3,
    height: windowHeight * 0.15,
    borderRadius: 10,
    backgroundColor: 'red',
    gap: 20,
    marginRight: 20,
  },
});

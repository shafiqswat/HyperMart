import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../assets/constants/Fonts';

const Heading = ({ heading, style }) => {
  return (
    <>
      <Text style={[styles.heading, style]}>{heading}</Text>
    </>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontFamily: Fonts.SANS_BOLD,
  },
});

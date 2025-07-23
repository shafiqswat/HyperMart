import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../assets/constants/Fonts';

export const Label = ({ label, style }) => {
  return (
    <>
      <Text style={[styles.label, style]}>{label}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: Fonts.SANS_REGULAR,
    fontSize: 10,
  },
});

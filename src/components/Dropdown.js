import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Fonts } from '../assets/constants/Fonts';

export const Dropdown = ({
  items,
  placeholder,
  setItems,
  open,
  setOpen,
  value,
  setValue,
}) => {
  return (
    <>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={placeholder}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: '#eee',
  },
  dropdown: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    width: 77,
    gap: 0,
    padding: 0,
    margin: 0,
    fontSize: 12,
    fontStyle: Fonts.SANS_REGULAR,
  },
});

import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../assets/constants/Color';
import { Dropdown } from './Dropdown';
import { Languages } from '../assets/constants/Dummy';
import { Fonts } from '../assets/constants/Fonts';

export const Header = ({ titleColor, title, subTitle }) => {
  const [value, setValue] = useState(null);
  const [Language, setLanguage] = useState(Languages);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleColor]}>
        {title}
        <Text style={[styles.subTitle, titleColor]}>{subTitle}</Text>
      </Text>
      <View style={styles.DropdownContainer}>
        <Dropdown
          placeholder="Eng"
          items={Language}
          setItems={setLanguage}
          open={isOpen}
          setOpen={setIsOpen}
          value={value}
          setValue={setValue}
        />

        <Image source={require('../assets/images/bell.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: 50,
    color: Colors.SANDY_ORANGE,
    fontFamily: Fonts.SANS_BOLD,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    color: Colors.TEAL_BLUE,
  },
  DropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

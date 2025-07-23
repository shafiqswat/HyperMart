import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../assets/constants/Color';
import { Search } from '../assets/images';
import { Fonts } from '../assets/constants/Fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Input = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.Input}
          placeholder="Search Anything..."
          placeholderTextColor={Colors.BLUE_GRAY}
        />
        <Search style={{ position: 'absolute', top: 16, left: 10 }} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    position: 'relative',
    marginTop: 20,
  },
  Input: {
    height: 54,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    paddingStart: 42,
    fontFamily: Fonts.SANS_REGULAR,
    color: Colors.BLUE_GRAY,
  },
});

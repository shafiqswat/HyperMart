import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Colors } from '../assets/constants/Color';
import Heading from '../components/Heading';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '../context/AuthContext';

export const SignUp = () => {
  const { SignUpFun } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    SignUpFun({ firstName, lastName, email, password, address });
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <View style={styles.container}>
        <Heading
          heading="Login Page"
          style={{ textAlign: 'center', fontSize: 20 }}
        />
        {
          <Input
            label="Enter Your FirstName"
            onChangeText={setFirstName}
            value={firstName}
          />
        }
        <Input
          label="Enter Your LastName"
          onChangeText={setLastName}
          value={lastName}
        />
        <Input label="Enter Your Email" onChangeText={setEmail} value={email} />
        <Input
          label="Enter Your Password"
          onChangeText={setPassword}
          value={password}
        />
        <Input
          label="PLease Confirm Your Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Input
          label="Please Enter Your Address"
          onChangeText={setAddress}
          value={address}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: Colors.TOMATO,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: Colors.WHITE,
  },
});

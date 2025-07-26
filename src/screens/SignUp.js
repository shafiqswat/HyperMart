import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Colors } from '../assets/constants/Color';
import Heading from '../components/Heading';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../assets/constants/Routes';

export const SignUp = () => {
  const { SignUpFun, loading } = useAuth();
  const navigate = useNavigation();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
  });
  const [confirmError, setConfirmError] = useState('');

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      setConfirmError('Passwords do not match');
      return;
    }
    setConfirmError('');
    SignUpFun(form, navigate);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Heading
        heading="Sign Up"
        style={{ textAlign: 'center', fontSize: 20 }}
      />

      <Input
        label="First Name"
        required
        onChangeText={text => handleChange('firstName', text)}
        value={form.firstName}
      />
      <Input
        label="Last Name"
        required
        onChangeText={text => handleChange('lastName', text)}
        value={form.lastName}
      />
      <Input
        label="Email"
        required
        onChangeText={text => handleChange('email', text)}
        value={form.email}
        validation={{
          test: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email format',
        }}
      />
      <Input
        label="Password"
        required
        secureTextEntry
        onChangeText={text => handleChange('password', text)}
        value={form.password}
      />
      <Input
        label="Confirm Password"
        required
        secureTextEntry
        onChangeText={text => handleChange('confirmPassword', text)}
        value={form.confirmPassword}
      />
      <Input
        label="Address"
        required
        onChangeText={text => handleChange('address', text)}
        value={form.address}
      />

      {confirmError ? (
        <Text style={styles.errorText}>{confirmError}</Text>
      ) : null}

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>{loading ? 'loading..' : 'Submit'}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigate.navigate(Screens.LOGIN)}>
          <Text style={{ color: Colors.TOMATO, fontWeight: 'bold' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
});

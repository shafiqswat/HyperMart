import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Heading from '../components/Heading';
import { Input } from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../assets/constants/Routes';
import { useAuth } from '../context/AuthContext';
import { Colors } from '../assets/constants/Color';

export const Login = () => {
  const { LoginFun, loading } = useAuth();
  const navigate = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    LoginFun(form, navigate);
  };

  return (
    <View style={styles.container}>
      <Heading heading="Login" style={{ textAlign: 'center', fontSize: 20 }} />
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
        onChangeText={text => handleChange('password', text)}
        value={form.password}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>{loading ? 'loading..' : 'Submit'}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigate.navigate(Screens.SIGN_UP)}>
          <Text style={{ color: Colors.TOMATO, fontWeight: 'bold' }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
});

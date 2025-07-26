import React, { createContext, useContext, useState } from 'react';
import { AuthService } from '../services/auth.service';
import { Screens } from '../assets/constants/Routes';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(user, 'user data');
  const SignUpFun = async (
    { firstName, lastName, email, password, address },
    navigation,
  ) => {
    setLoading(true);
    try {
      const response = await AuthService.SignUp({
        firstName,
        lastName,
        email,
        password,
        address,
      });
      setUser(response);
      navigation.navigate(Screens.LOGIN);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const LoginFun = async ({ email, password }, navigate) => {
    setLoading(true);
    try {
      const response = await AuthService.Login({ email, password });
      console.log(response);
      setUser(response._data);
      navigate.navigate(Screens.HOME);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const values = {
    SignUpFun,
    LoginFun,
    user,
    error,
    loading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

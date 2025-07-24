import React, { createContext, useContext, useState } from 'react';
import { AuthService } from '../services/auth.service';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const SignUpFun = async ({
    firstName,
    lastName,
    email,
    password,
    address,
  }) => {
    console.log(firstName, lastName, email, password, address);
    setLoading(true);
    try {
      const response = AuthService.SignUp({
        firstName,
        lastName,
        email,
        password,
        address,
      });
      setUser(response.user);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const values = {
    SignUpFun,
    user,
    error,
    loading,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

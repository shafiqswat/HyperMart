import { LogBox, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ProductsProvider } from './src/context/ProductsContext';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import AppRoutes from './src/navigation/AppRoutes';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <>
      {/* <Root /> */}
      <AuthProvider>
        <ProductsProvider>
          <AppRoutes />
        </ProductsProvider>
      </AuthProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

import { LogBox, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StacksRoot } from './src/navigation/Stack';
import { TabsRoot } from './src/navigation/Tabs';
import { ProductsProvider } from './src/context/ProductsContext';
import { AuthProvider } from './src/context/AuthContext';

LogBox.ignoreAllLogs(true);

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      {/* <Root /> */}
      <AuthProvider>
        <ProductsProvider>
          {user ? <TabsRoot /> : <StacksRoot />}
        </ProductsProvider>
      </AuthProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

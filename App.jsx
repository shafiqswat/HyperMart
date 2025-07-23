import { LogBox, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Root } from './src/navigation/Stack';
import { TabsRoot } from './src/navigation/Tabs';
import { ProductsProvider } from './src/context/ProductsContext';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <>
      {/* <Root /> */}
      <ProductsProvider>
        <TabsRoot />
      </ProductsProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

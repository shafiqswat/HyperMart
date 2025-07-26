import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Colors } from '../assets/constants/Color';

export const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome , {`${user.firstName} ${user.lastName}`}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.CELESTIAL_BLUE,
  },
  text: {
    color: Colors.WHITE,
  },
});

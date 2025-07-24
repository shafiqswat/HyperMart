import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../assets/constants/Routes';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { About, Cart, Profile } from '../screens';
import { Favorite } from '../screens/Favorite';
import { Colors } from '../assets/constants/Color';
import {
  Avatar,
  CartIcon,
  DashboardIcon,
  Heart,
  HomeIcon,
} from '../assets/images';

const Tab = createBottomTabNavigator();
export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />

      <Tab.Screen
        name={Screens.ABOUT}
        component={About}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <DashboardIcon />,
        }}
      />
      <Tab.Screen
        name={Screens.CART}
        component={Cart}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <CartIcon style={{ position: 'absolute', bottom: -35 }} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.FAVORITE}
        component={Favorite}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Heart />,
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.PEARLY_PURPLE,
          tabBarIcon: () => <Avatar />,
        }}
      />
    </Tab.Navigator>
  );
};

export const TabsRoot = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

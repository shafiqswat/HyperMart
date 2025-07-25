import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../assets/constants/Routes';
import { Login, SignUp } from '../screens';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.SIGN_UP}
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const StacksRoot = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

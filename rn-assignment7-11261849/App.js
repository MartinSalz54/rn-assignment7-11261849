import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './assets/Screens/HomeScreen'
import CartScreen from './assets/Screens/CartScreen';
import CheckoutPage from './assets/Screens/CheckoutPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

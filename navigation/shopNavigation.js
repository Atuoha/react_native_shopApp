import React from "react";
import { Platform } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductOverScreen from "../screens/shop/ProductOverScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import CartScreen from "../screens/shop/CartScreen";
import Color from '../constants/color'

const screenOptions = {
  headerStyle:{
    backgroundColor: Platform.OS === 'android' || 'web' ? Color.primary : 'white'
  },

  headerTintColor: Platform.OS === 'android' || 'web' ? 'white' : Color.primary,
  headerTitleStyle:{
    fontWeight: 'bold'
  }

  
}

const Stack = createStackNavigator();
export const TopNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Products" component={ProductOverScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductOverScreen from "../screens/shop/ProductOverScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import CartScreen from "../screens/shop/CartScreen";
import Color from "../constants/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const screenOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" || "web" ? Color.primary : "white",
  },

  headerTintColor: Platform.OS === "android" || "web" ? "white" : Color.primary,
  headerTitleStyle: {
    fontWeight: "bold",
  },
 
};

const Stack = createStackNavigator();
export const ShopNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Products" component={ProductOverScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const Cart = createStackNavigator();
export const CartNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Carts" component={CartScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: Color.primary,
        inactiveTintColor: Color.primary,
        activeColor: "white",
      }}>
      <Tab.Screen
        component={ShopNavigation}
        name="shop"
        options={{
          tabLabel: "Home",
          tabBarIcon: (tint) => {
            return(
              <AntDesign name="home" size={25} color={tint.color} />
            )
          },
          tabTitleStyle:{
            inactiveTintColor: Color.primary,
            fontSize: 10
          }
         
        }}
      />
      <Tab.Screen
        component={CartNavigation}
        name="cart"
        options={{
          tabLabel: "Cart",
          tabBarIcon: (tint) => {
            return(
              <AntDesign name="shoppingcart" size={25} color={tint.color} />
            )
          },
        }}
      />
      <Tab.Screen
        component={CartNavigation}
        name="user"
        options={{
          tabLabel: "User",
          tabBarIcon: (tint) => {
            return(
              <AntDesign name="user" size={25}  color={tint.color} />
            )
          },
        }}
      />
    </Tab.Navigator>
  );
};


const Drawer = createDrawerNavigator();
export const MainNavigation = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen component={TabNavigation} name="Home"/>
      <Drawer.Screen component={OrderScreen} name="Orders" />
      <Drawer.Screen component={CartNavigation} name="Carts" />
    </Drawer.Navigator>
  )
}

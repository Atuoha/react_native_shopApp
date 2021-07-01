import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductOverScreen from "../screens/shop/ProductOverScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import CartScreen from "../screens/shop/CartScreen";
import UserProductsScreen from '../screens/user/ProductsScreen'
import Profile from '../screens/user/Profile'
import EditProductScreen from '../screens/user/CreateAndEditProductScreen'
import Color from "../constants/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";



// GENERAL OPTIONS FOR STACK
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

// STACK

const Stack = createStackNavigator();
export const ShopNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      navigationOptions={{
        drawerIcon: (drawerConfig) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-list" : "md-list"}
            size={25}
            color={drawerConfig.color}
          />
        ),
      }}>
      <Stack.Screen name="Products" component={ProductOverScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export const CartNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}>
      <Stack.Screen name="Carts" component={CartScreen} />
    </Stack.Navigator>
  );
};

export const OrdersNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}>
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  );
};


export const UserProductsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}>
      <Stack.Screen name="UserProducts" component={UserProductsScreen} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

export const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

// export const EditProductNavigation = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={screenOptions}>
//       <Stack.Screen name="EditProduct" component={EditProductScreen} />
//     </Stack.Navigator>
//   );
// };















// TAB

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: Color.primary,
        inactiveTintColor: Color.primary,
      }}>
      <Tab.Screen
        component={ShopNavigation}
        name="Home"
        options={{
          tabLabel: "Home",
          tabBarIcon: (tint) => {
            return <AntDesign name="home" size={25} color={tint.color} />;
          },
          tabTitleStyle: {
            inactiveTintColor: Color.primary,
            fontSize: 10,
          },
        }}
      />
      <Tab.Screen
        component={CartNavigation}
        name="Carts"
        options={{
          tabLabel: "Cart",
          tabBarIcon: (tint) => {
            return (
              <AntDesign name="shoppingcart" size={25} color={tint.color} />
            );
          },
        }}
      />
      <Tab.Screen
        component={OrdersNavigation}
        name="Orders"
        options={{
          tabLabel: "Order",
          tabBarIcon: (tint) => {
            return (
              <Ionicons
                name={Platform.OS === "ios" ? "ios-list" : "md-list"}
                size={25}
                color={tint.color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={ProfileNavigation}
        name="Profile"
        options={{
          tabLabel: "User",
          tabBarIcon: (tint) => {
            return <AntDesign name="user" size={25} color={tint.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};















// DRAWER

const Drawer = createDrawerNavigator();
export const MainNavigation = () => {
  return (
    <Drawer.Navigator drawerContentOptions={{ activeTintColor: Color.primary }}>
      <Drawer.Screen
        component={TabNavigation}
        name="Home"
        options={{
          drawerIcon: (tint) => {
            return <Ionicons name="home" size={25} color={tint.color} />;
          },
        }}
      />
      <Drawer.Screen
        component={OrdersNavigation}
        name="Orders"
        options={{
          drawerIcon: (tint) => {
            return <Ionicons name="list" size={25} color={tint.color} />;
          },
        }}
      />
      <Drawer.Screen
        component={CartNavigation}
        name="Carts"
        options={{
          drawerIcon: (tint) => {
            return <Ionicons name="cart" size={25} color={tint.color} />;
          },
        }}
      />
      <Drawer.Screen
        component={UserProductsNavigation}
        name="Manage"
        options={{
          drawerIcon: (tint) => {
            return <Ionicons name={Platform.OS === 'ios' ? 'ios-create': 'md-create'} size={25} color={tint.color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

import React, { useEffect } from "react";
import {
  FlatList,
  Platform,
  Text,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import Color from "../../constants/color";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const CartScreen = ({ route, navigation }) => {
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.carts.cartProducts) {
      transformedCartItems.push({
        productId: state.carts.cartProducts[key].id,
        productTitle: state.carts.cartProducts[key].productTitle,
        productPrice: state.carts.cartProducts[key].productPrice,
        productQuantity: state.carts.cartProducts[key].quantity,
        productSum: state.carts.cartProducts[key].sum,
      });
    }
    return transformedCartItems;
  });
  const totalAmount = useSelector((state) => state.carts.totalAmount);
  console.log(cartItems);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Cart Items",
      headerTitleStyle: {
        fontSize: 23,
      },
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          color={Platform.OS === "ios" ? Color.primary : "white"}
          size={35}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });
  });

  const renderItem = (itemData) => {
    return (
      <CartItem
        quantity ={itemData.item.productQuantity}
        name ={itemData.item.productTitle}
        price ={itemData.item.productPrice}
        removeFromCart={() =>
         console.log('......')
        }
      />
    );
  };

  //   let keys =  Object.keys(Products);
  //   let ProductCount = keys.length

  if (cartItems.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Opps! Cart is empty! Add Item to Cart</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.text}>Your Items in Cart </Text>
      </View>

      <View style={styles.upperScreen}>
        <Text style={styles.caption}>
          Total Amount:
          <Text style={styles.totalStyle}> ${totalAmount.toFixed(2)}</Text>
        </Text>
        <Text style={styles.caption}>
          Total Items: <Text style={styles.totalStyle}>{cartItems.length}</Text>
        </Text>
        <Button title="Order Now" color={Color.primary} size={35} />
      </View>
      <FlatList data={cartItems} renderItem={renderItem} />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },

  upperScreen: {
    // alignItems: "center",
    // marginTop: 10,
    padding: 30,
    backgroundColor: Color.accent,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    margin: 20,
  },

  caption: {
    fontSize: 15,
    fontWeight: "bold",
  },

  totalStyle: {
    fontSize: 15,
    color: Color.primary,
  },

  textView: {
    backgroundColor: Color.primary,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
});

export default CartScreen;

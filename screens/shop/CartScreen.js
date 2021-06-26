import React, { useEffect } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Color from "../../constants/color";

const CartScreen = ({ route, navigation }) => {
  const Products = useSelector((state) => state.carts.cartProducts);
  console.log(Products);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Cart Items",
      headerTitleStyle: {
        fontSize: 23,
      },
    });
  });

  const renderItem = (itemData) => {
    return (
      <ProductItem
        imageUrl={itemData.item.image}
        price={itemData.item.price}
        name={itemData.item.name}
        viewDetails={() =>
          navigation.navigate("Details", { id: itemData.item.id })
        }
        addToCart={() => console.log("item added")}
      />
    );
  };

  if (Products.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Opps! Cart is empty! Add Item to Cart</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.text}>Your Items in Cart: {Products.length}</Text>
      </View>
      <FlatList data={Products} renderItem={renderItem} />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  textView: {
    backgroundColor: Color.primary,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    // fontWeight: 'bold'
  },
});

export default CartScreen;

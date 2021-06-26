import React, { useEffect, useCallback } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Color from "../../constants/color";
import { useDispatch } from "react-redux";
import { toggle_to_cart } from "../../store/actions/cart";

const ProductOverScreen = ({ route, navigation }) => {
  const Products = useSelector((state) => state.products.products);
  console.log(Products);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Shoppingly",
      headerTitleStyle: {
        fontSize: 23,
      },
    });
  });

  const dispatch = useDispatch();
  const toggle_to_cartFnc = useCallback(() => {
    dispatch(toggle_to_cart);
  }, [dispatch, Products]);

  const renderItem = (itemData) => {
    return (
      <ProductItem
        imageUrl={itemData.item.image}
        price={itemData.item.price}
        name={itemData.item.name}
        viewDetails={() =>
          navigation.navigate("Details", { id: itemData.item.id })
        }
        addToCart={() =>
            dispatch(toggle_to_cart(itemData.item.id))
         
        }
      />
    );
  };

  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.text}>All Available Products</Text>
      </View>
      <FlatList data={Products} renderItem={renderItem} />
    </>
  );
};

const styles = StyleSheet.create({
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

export default ProductOverScreen;

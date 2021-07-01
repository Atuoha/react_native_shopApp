import React, { useEffect, useCallback } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Platform,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Color from "../../constants/color";
import * as cartActions from "../../store/actions/cart";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ProductOverScreen = ({ route, navigation }) => {
  const Products = useSelector((state) => state.products.products);
  console.log(Products);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Shoppingly",
      headerTitleStyle: {
        fontSize: 23,
      },
      headerRight: () => (
        <Ionicons
          name="cart"
          color={Platform.OS === "ios" ? Color.primary : "white"}
          size={35}
          onPress={() => navigation.navigate("Carts")}
        />
      ),
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

  const dispatch = useDispatch();

  const renderItem = (itemData) => {
    return (
      <ProductItem
        imageUrl={itemData.item.image}
        price={itemData.item.price}
        name={itemData.item.name}
        onSelect={() =>
          navigation.navigate("Details", { id: itemData.item.id })
        }>
        <View style={styles.individualBtnView}>
          <Button
            title={<AntDesign name="book" size={17} />}
            color={Color.primary}
            onPress={() =>
              navigation.navigate("Details", { id: itemData.item.id })
            }
          />
        </View>

        <View style={styles.individualBtnView}>
          <Button
            title={
              <AntDesign name="shoppingcart" size={17} color={Color.primary} />
            }
            color={Color.accent}
            onPress={() => dispatch(cartActions.addToCart(itemData.item))}
          />
        </View>
      </ProductItem>
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
    backgroundColor: Color.accent,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: Color.primary,
    // fontWeight: 'bold'
    fontSize: 15,
  },

  individualBtnView: {
    width: "45%",
  },
});

export default ProductOverScreen;

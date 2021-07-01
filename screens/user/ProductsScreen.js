import React, { useEffect, useCallback } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Button,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Color from "../../constants/color";
import * as cartActions from "../../store/actions/cart";
import * as productActions from "../../store/actions/products";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ProductsScreen = ({ route, navigation }) => {
  const Products = useSelector((state) => state.products.userProducts);
  console.log(Products);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Shoppingly",
      headerTitleStyle: {
        fontSize: 23,
      },
      headerRight: () => (
        <Ionicons
        name={Platform.OS === 'ios' ? "ios-create" : "md-create"}
        color={Platform.OS === "ios" ? Color.primary : "white"}
          size={35}
          onPress={() => navigation.navigate("EditProduct", {id: null})}
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
          navigation.navigate("EditProduct", { id: itemData.item.id })
        }>
        <View style={styles.individualBtnView}>
          <Button
            title={<Ionicons name="create" size={17} />}
            color={Color.primary}
            onPress={() =>
              navigation.navigate("EditProduct", { id: itemData.item.id })
            }
          />
        </View>

        <View style={styles.individualBtnView}>
          <Button
            title={<Ionicons name="trash" size={17} color={Color.primary} />}
            color={Color.accent}
            onPress={() =>
              dispatch(productActions.deleteProduct(itemData.item.id))
            }
          />
        </View>
      </ProductItem>
    );
  };

  if (Products.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Opps! No Product to display. Add Product</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.text}>All Your Products</Text>
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
    backgroundColor: Color.accent,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: Color.primary,
    fontSize: 15,
  },

  individualBtnView: {
    width: "45%",
  },
});

export default ProductsScreen;

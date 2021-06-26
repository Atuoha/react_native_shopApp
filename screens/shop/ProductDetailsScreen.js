import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import Color from "../../constants/color";
import { useDispatch } from "react-redux";
import { toggle_to_cart } from "../../store/actions/cart";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const productDetails = useSelector((state) =>
    state.products.products.find((product) => product.id === id)
  );

  const cartProducts = useSelector((state) => state.carts.cartProducts)
  const index = cartProducts.findIndex(prod=> prod.id === id);
  let cartStatus;
  if(index >= 0){
      cartStatus = 'Remove from cart'
  }else{
      cartStatus = 'Add to Cart'
  }
  

  useEffect(() => {
    navigation.setOptions({
      headerTitle: productDetails.name,
    });
  }, [id]);

  const dispatch = useDispatch();

  const toggle_to_cartsFnc = () => {
    dispatch(toggle_to_cart(id));
    console.log('dispatching...')
  }

  return (
    <ScrollView>
      <Image source={{ uri: productDetails.name }} style={styles.imageStyle} />
      <Button
        title={cartStatus}
        color={Color.primary}
        onPress={() => toggle_to_cartsFnc() }
      />
      <View style={styles.descView}>
        <Text style={styles.priceText}>${productDetails.price}</Text>
        <Text>Available in {productDetails.colors}</Text>
        <Text>{productDetails.desc}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 300,
  },

  descView: {
    alignItems: "center",
    padding: 20,
  },

  priceText: {
    fontSize: 25,
    marginVertical: 4,
    color: "#888",
  },

  nameStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default ProductDetailsScreen;

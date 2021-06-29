import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import Color from "../../constants/color";
import { AntDesign } from "@expo/vector-icons";

const ProductItem = (props) => {
  let RenderComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    RenderComponent = TouchableNativeFeedback;
  }

  return (
      <RenderComponent onPress={props.viewDetails} style={styles.grid} useForeground>
        <Image style={styles.imageStyle} source={{ uri: props.imageUrl }} />

        <View style={styles.details}>
          <Text style={styles.nameStyle}>{props.name}</Text>
          <Text style={styles.priceText}>${props.price.toFixed(2)}</Text>
        </View>

        <View style={styles.btnView}>
          <View style={styles.individualBtnView}>
            <Button
              title={<AntDesign name="book" size={17} />}
              color={Color.primary}
              onPress={props.viewDetails}
            />
          </View>

          <View style={styles.individualBtnView}>
            <Button
              title={<AntDesign name="shoppingcart" size={17} color={Color.primary} />}
              color={Color.accent}
              onPress={props.addToCart}
            />
          </View>
        </View>
      </RenderComponent>
  );
};

const styles = StyleSheet.create({
  grid: {
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ddd",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#ddd",
    // flex: 1,
    elevation: 5,
    margin: 10,
    overflow: "hidden",
    backgroundColor: 'white',
  },

  imageStyle: {
    width: "100%",
    height: "60%",
  },

  details: {
    height: "15%",
    textAlign: "center",
    padding: 5,
  },

  priceText: {
    fontSize: 15,
    marginVertical: 4,
    color: "#888",
  },

  nameStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },

  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: "20%",
    marginVertical: 10,
  },

  individualBtnView: {
    width: "45%",
  },
});

export default ProductItem;

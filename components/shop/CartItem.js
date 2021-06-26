import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";

import Color from "../../constants/color";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = (props) => {
  const { price, quantity, name, removeFromCart, detailsFnc } = props;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.grid}>
        <View style={styles.innerGrid}>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={detailsFnc}>
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.innerGrid}>
          <Text style={styles.text}>${price}</Text>
          <TouchableOpacity
            onPress={removeFromCart}
            style={styles.delBtn}>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
              size={25}
              color={Color.primary}
              onPress={removeFromCart}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 30,
    marginVertical: 10,
    flex: 1,
    padding: 10,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  innerGrid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  quantity: {
    color: "#888",
    fontWidth: "bold",
    fontSize: 16,
    marginRight: 10,
  },

  text: {
    fontWeight: "bold",
    fontSize: 16,
  },

  delBtn: {
    marginLeft: 20,
  },
});

export default ProductItem;

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../constants/color";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";

const OrderScreen = ({ route, navigation }) => {
  const orders = useSelector((state) => state.orders.orderList);
  const orderItems = useSelector((state) => state.orders.orderList.items);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Ordering Items",
      headerLeft: () => (
        <Ionicons
          name="menu"
          size={35}
          color={Platform.OS === "ios" ? Color.primary : "white"}
          onPress={() => navigation.toggleDrawer()}
        />
      ),

      headerRight: () => (
        <Ionicons
          name="ios-card"
          size={35}
          color={Platform.OS === "ios" ? Color.primary : "white"}
        />
      ),
    });
  });

  if (orders.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Opps! Order is empty.</Text>
      </View>
    );
  }

  const renderItem = (itemData) => {
    return (
      <OrderItem
        orders={itemData.item.items}
        total={itemData.item.totalAmount}
        date={itemData.item.readableDate}
        navigation = {navigation.navigate}
      />
    );
  };

  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.text}>Order Summary</Text>
      </View>

      <FlatList data={orders} renderItem={renderItem} />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
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
});

export default OrderScreen;

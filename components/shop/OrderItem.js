import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Platform } from "react-native";
import Color from "../../constants/color";
import CartItem from "./CartItem";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { total, date, orders, navigation } = props;
  console.log(orders)

  return (
    <View style={styles.screen}>
      <View style={styles.grid}>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        onPress={() => setShowDetails((prevState) => !prevState)}
        title={showDetails ? "Hide Details": "Show Details" }
        color={Color.primary}
      />

      {showDetails && (
        <View style={{marginTop: 20}}>
          {orders.map((item) => (
            <CartItem
              key={item.productId}
              id={item.productId}
              quantity={item.productQuantity}
              name={item.productTitle}
              sum={item.productSum}
              price={item.productPrice}
              detailsFnc={() =>
               navigation("Details", { id: item.productId })
              }
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
    minHeight: 100,
    borderRadius: 10,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  total: {
    fontWeight: "bold",
    fontSize: 16,
  },

  date: {
    color: "#888",
    fontStyle: "italic",
    fontSize: 16,
  },
});

export default OrderItem;

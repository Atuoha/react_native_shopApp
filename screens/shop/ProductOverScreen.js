import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

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

  const renderItem = (itemData) => {
    return (
      <ProductItem
        imageUrl={itemData.item.image}
        price={itemData.item.price}
        name={itemData.item.name}
        viewDetails={() =>
          navigation.navigate("Details", { id: itemData.item.id })
        }
      />
    );
  };

  return <FlatList data={Products} renderItem={renderItem} />;
};

export default ProductOverScreen;

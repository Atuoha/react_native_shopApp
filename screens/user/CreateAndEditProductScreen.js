import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../store/actions/products";

const CreateAndEditProductScreen = ({ route, navigation }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState("");
  const [desc, setDesc] = useState("");

  const { id } = route.params;
  const userProducts = useSelector((state) => state.products.userProducts);
  const editProduct = userProducts.find((prod) => prod.id === id);

  useEffect(() => {
    if (id !== null) {
      setEditMode(true);
      setName(editProduct.name);
      setPrice(editProduct.price);
      setDesc(editProduct.desc);
      setImage(editProduct.image);
      setColors(editProduct.colors);
    }
  }, [id]);

  const dispatch = useDispatch();

  const submitData = useCallback(() => {
    if (editMode) {
      console.log("...editing");
      dispatch(productActions.updateProduct(id, name, desc, image, colors));
      console.log(id, name, desc, price, image, colors);
      setTimeout(() => {
        navigation.navigate("UserProducts");
      }, 1000);
    } else {
      console.log("...creating");
      dispatch(productActions.addProduct(name, desc, image, price, colors));
      console.log(name, price, image, desc, colors);
      setTimeout(() => {
        navigation.navigate("UserProducts");
      }, 1000);
    }
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: editMode ? editProduct.name : "Create Product",
      headerTitleStyle: {
        fontSize: 23,
      },

      headerRight: () => (
        <Ionicons
          name="ios-checkmark"
          color={Platform.OS === "ios" ? Color.primary : "white"}
          size={35}
          onPress={() => submitData()}
        />
      ),
    });
  });
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput
            value={name}
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>Image URL</Text>
          <TextInput
            value={image}
            style={styles.input}
            onChangeText={(text) => setImage(text)}
          />
        </View>
        {!editMode && (
          <View style={styles.formControl}>
            <Text style={styles.formLabel}>Price</Text>
            <TextInput
              value={price}
              style={styles.input}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>Colors</Text>
          <TextInput
            value={colors}
            style={styles.input}
            onChangeText={(text) => setColors(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>Description</Text>
          <TextInput
            value={desc}
            style={styles.input}
            onChangeText={(text) => setDesc(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },

  formControl: {
    width: "100%",
  },

  formLabel: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: "bold",
  },

  input: {
    padding: 10,
    borderRadius: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default CreateAndEditProductScreen;

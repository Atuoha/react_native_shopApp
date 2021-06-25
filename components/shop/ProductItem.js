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
    <View>
      <RenderComponent  onPress={props.viewDetails} style={styles.grid}>
            <Image style={styles.imageStyle} source={{ uri: props.imageUrl }} />

           <View style={styles.details}>
            <Text style={styles.nameStyle}>{props.name}</Text>
            <Text style={styles.priceText}>${props.price.toFixed(2)}</Text>
          </View>

        <View style={styles.btnView}>
          <View style={styles.individualBtnView}>
            <Button
              title={<AntDesign name="book" size={17} />}
              color={Platform.OS === 'ios' ? '' : Color.primary}
              onPress={props.viewDetails}
            />
          </View>

          <View style={styles.individualBtnView}>
            <Button
              title={<AntDesign name="plus" size={17} />}
              color={Platform.OS === 'ios' ? '' : Color.primary}
            />
          </View>
        </View>
      </RenderComponent>
    </View>
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
  },

  imageStyle:{
    width: '100%',
    height: '60%'
  },

 
  details:{
    height: '15%',
    textAlign: 'center',
    padding: 5,
  },


  priceText:{
    textSize: 20,
    marginVertical: 4,
    color: '#888'
  },
  
  nameStyle:{
    fontWeight: 'bold',
    fontSize: 25,
  },

  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: '20%',
    marginVertical: 10
  },

  individualBtnView: {
    width: "45%",
  },
});

export default ProductItem;

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./navigation/shopNavigation";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import productsReducer  from "./store/reducers/products";
import cartsReducer  from "./store/reducers/cart";
import ordersReducer  from "./store/reducers/orders";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  orders: ordersReducer,
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'kirang': require("./assets/fonts/KirangHaerang-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}

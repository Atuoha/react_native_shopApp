import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./navigation/shopNavigation";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { productsReducer } from "./store/reducers/products";

export default function App() {
  const rootReducer = combineReducers({
    products: productsReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}

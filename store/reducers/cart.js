import PRODUCTS from "../../data/dummy-data";
import { TOGGLE_TO_CART } from "../actions/cart";

const initialState = {
  products: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.userId === "u1"),
  cartProducts: [],
};

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TO_CART:
      const existing_index = state.cartProducts.findIndex(
        (prod) => prod.id === action.productId
      );
      if (existing_index >= 0) {
        console.log("removed from cart");
        const updatedProducts = [...state.cartProducts];
        updatedProducts.splice(existing_index, 1);
        return { ...state, cartProducts: updatedProducts };
      } else {
        console.log("added to cart");
        const product = state.products.find(
          (prod) => prod.id === action.productId
        );
        return { ...state, cartProducts: state.cartProducts.concat(product) };
      }

    default:
      return state;
  }
};

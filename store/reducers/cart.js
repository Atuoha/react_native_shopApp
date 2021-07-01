import PRODUCTS from "../../data/dummy-data";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from "../actions/cart";

import { DELETE_PRODUCT } from "../actions/products";
import CartItem from "../../models/cartItem";

const initialState = {
  products: PRODUCTS,
  cartProducts: {},
  totalAmount: 0.0,
  totalQuantity: 0,
};

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedCartItem = action.product;
      const itemTitle = addedCartItem.name;
      const itemPrice = addedCartItem.price;
      const itemSum = addedCartItem.price;

      let newOrUpdatedCart;

      if (state.cartProducts[addedCartItem.id]) {
        // already in carts
        console.log("item quantity updated...");
        newOrUpdatedCart = new CartItem(
          addedCartItem.id,
          state.cartProducts[addedCartItem.id].quantity + 1,
          itemTitle,
          itemPrice,
          state.cartProducts[addedCartItem.id].sum + itemPrice
        );
      } else {
        // new to cart
        console.log("item added...");
        newOrUpdatedCart = new CartItem(
          addedCartItem.id,
          1,
          itemTitle,
          itemPrice,
          itemSum
        );
      }

      return {
        ...state,
        cartProducts: {
          ...state.cartProducts,
          [addedCartItem.id]: newOrUpdatedCart,
        },
        totalAmount: state.totalAmount + itemPrice,
        totalQuantity: state.totalQuantity + 1,
      };

    case REMOVE_FROM_CART:
      const selectedCartItem = state.cartProducts[action.productId];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;

      if (currentQty > 1) {
        // reduce quantity
        console.log("quantity reduced...");
        const updatedCartItem = new CartItem(
          action.productId,
          selectedCartItem.quantity - 1,
          selectedCartItem.productTitle,
          selectedCartItem.productPrice,
          selectedCartItem.sum - selectedCartItem.productPrice
        );

        updatedCartItems = {
          ...state.cartProducts,
          [action.productId]: updatedCartItem,
        };
      } else {
        // delete totally
        console.log("item removed...");
        updatedCartItems = { ...state.cartProducts };
        delete updatedCartItems[action.productId];
      }

      return {
        ...state,
        cartProducts: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
        totalQuantity: state.totalQuantity - 1,
      };

    case REMOVE_ALL_FROM_CART:
      return {
        cartProducts: {},
        totalAmount: 0,
        totalQuantity: 0,
      };

    case DELETE_PRODUCT:
      if (!state.cartProducts[action.proId]) {
        return state;
      }
      const item = state.cartProducts[action.proId];
      const updatedCartProducts = { ...state.cartProducts };
      delete updatedCartProducts[action.proId];
      return {
        ...state,
        cartProducts: updatedCartProducts,
        totalAmount: state.totalAmount - item.sum,
        totalQuantity: state.totalQuantity - 1,
      };

    default:
      return state;
  }
};

export default cartsReducer;

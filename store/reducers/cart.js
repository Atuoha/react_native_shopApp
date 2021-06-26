// import PRODUCTS from "../../data/dummy-data";
// import { TOGGLE_TO_CART } from "../actions/cart";

// const initialState = {
//   products: PRODUCTS,
//   userProducts: PRODUCTS.filter((product) => product.userId === "u1"),
//   cartProducts: [],
// };

// export const cartsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_TO_CART:
//       const existing_index = state.cartProducts.findIndex(
//         (prod) => prod.id === action.productId
//       );
//       if (existing_index >= 0) {
//         console.log("removed from cart");
//         const updatedProducts = [...state.cartProducts];
//         updatedProducts.splice(existing_index, 1);
//         return { ...state, cartProducts: updatedProducts };
//       } else {
//         console.log("added to cart");
//         const product = state.products.find(
//           (prod) => prod.id === action.productId
//         );
//         return { ...state, cartProducts: state.cartProducts.concat(product) };
//       }

//     default:
//       return state;
//   }
// };

import PRODUCTS from "../../data/dummy-data";
import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";

const initialState = {
  products: PRODUCTS,
  cartProducts: {},
  totalAmount: 0.00,
};

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedCartItem = action.product;
      const itemTitle = addedCartItem.name;
      const itemPrice = addedCartItem.price;
      const itemSum = addedCartItem.sum;

      let newOrUpdatedCart;

      if (state.cartProducts[addedCartItem.id]) {
        // already in carts
        console.log('item quantity updated...')
        newOrUpdatedCart = new CartItem(
          state.cartProducts[addedCartItem.id].quantity + 1,
          itemTitle,
          itemPrice,
          state.cartProducts[addedCartItem.id].sum + itemPrice
        );
      } else {
        // new to cart
        console.log('item added...')
        newOrUpdatedCart = new CartItem(1, itemTitle, itemPrice, itemSum);
      }

      return {
        ...state,
        cartProducts: {
          ...state.cartProducts,
          [addedCartItem.id]: newOrUpdatedCart,
        },
        totalAmount: state.totalAmount + itemPrice,
      };

    default:
      return state;
  }
};

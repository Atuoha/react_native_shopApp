import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/product";
import {
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";

const initialState = {
  products: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.userId === "u1"),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:

      const newProduct = new Product(
        new Date().toString(),
        "u1",
        action.productData.title,
        action.productData.image,
        action.productData.desc,
        parseInt(action.productData.price),
        action.productData.colors
      );
      return {
        ...state,
        products: state.products.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const indexInUserProduct = state.userProducts.findIndex(
        (prod) => prod.id === action.productId
      );

      const indexInProducts = state.products.findIndex(
        (prod) => prod.id === action.productId
      );
      const updatedProduct = new Product(
        action.productId,
        state.userProducts[indexInUserProduct].userId,
        action.productData.title,
        action.productData.image,
        action.productData.desc,
        state.userProducts[indexInUserProduct].price,
        action.productData.colors
      );

      const productInUserProductState = [...state.userProducts]
      productInUserProductState[indexInUserProduct] = updatedProduct

      const productInProductsState = [...state.products]
      productInProductsState[indexInProducts] = updatedProduct

      return {
        ...state,
        products: productInProductsState,
        userProducts: productInUserProductState,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (prod) => prod.id !== action.proId
        ),
        products: state.products.filter((prod) => prod.id !== action.proId),
      };

    default:
      return state;
  }
};

export default productsReducer;

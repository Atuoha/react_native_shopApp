import PRODUCTS from "../../data/dummy-data";

const initialState = {
  products: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.userId === "u1"),
  cartProducts: [],
};

 const productsReducer = (state = initialState, action) => {
      return state;
};

export default productsReducer
import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  DELETE_FROM_CART,
} from "./types";

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((products) =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      })
    );
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: 1,
    },
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    payload: {
      id,
    },
  };
};
export const emptyCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: {
      id,
    },
  };
};

import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  DELETE_FROM_CART,
} from "../actions/types";

const initState = {
  items: [],
  cart: [],
};

const cartReducer = (state = initState, action) => {
  let cart = state.cart;
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_TO_CART:
      cart.push(action.payload);
      return {
        ...state,
        cart: cart,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: cart.map((elt) =>
          elt.product._id === action.payload.id
            ? { ...elt, quantity: elt.quantity - 1 }
            : elt
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        cart: cart.map((elt) =>
          elt.product._id === action.payload.id
            ? { ...elt, quantity: elt.quantity + 1 }
            : elt
        ),
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: cart.filter((elt) => elt.product._id != action.payload.id),
      };
    default:
      return state;
  }
};
export default cartReducer;

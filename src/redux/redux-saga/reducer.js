import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCTS,
  LOADER,
  SEARCH_PRODUCTS,
} from "./actionCreator";

export const initialState = {
  search: "",
  item: [],
  cart: [],
  isLoading: false,
};

export const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== payload),
      };
    case SET_PRODUCTS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        item: [...payload],
      };

    case SEARCH_PRODUCTS:
      console.log(payload);
      return {
        ...state,
        search: payload,
      };
    case LOADER:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export const ADD_TO_CART = "ADD_TO_CART ";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART ";
export const GET_PRODUCTS = "GET_PRODUCTS ";
export const SET_PRODUCTS = "SET_PRODUCTS ";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS ";
export const LOADER = "LOADER ";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
}

export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

export function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
}

export function setLoader(data) {
  return {
    type: LOADER,
    payload: data,
  };
}

export function search(query) {
  return {
    type: SEARCH_PRODUCTS,
    payload: query,
  };
}

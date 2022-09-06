import axios from "axios";

export const fetchProduct = () => {
  return axios.get("https://fakestoreapi.com/products");
};

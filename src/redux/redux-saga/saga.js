import { put, call } from "redux-saga/effects";
import { fetchProduct } from "../../api/axios";
import { setProducts } from "./actionCreator";

export function* fetchData() {
  try {
    const result = yield call(fetchProduct);
    // console.log(result.data, "data");
    yield put(setProducts(result.data));
  } catch (error) {
    console.error(error);
  }
}

// export function* searchData(data) {
//   console.log(data.query);
//   let result = yield fetch(`https://fakestoreapi.com/products?q=${data.query}`);
//   result = result.data;
//   console.log(result, "data");
//   yield put(setProducts(result));
// }

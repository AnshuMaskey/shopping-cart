import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "./actionCreator";
import { fetchData } from "./saga";

function* watchGetProductRequest() {
  yield takeLatest(GET_PRODUCTS, fetchData);
  // yield takeEvery(SEARCH_PRODUCTS, searchData);
}
export default watchGetProductRequest;

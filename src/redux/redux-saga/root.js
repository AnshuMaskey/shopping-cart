import { takeLatest, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS, SEARCH_PRODUCTS } from "./actionCreator";
import { fetchData, searchData } from "./saga";

function* watchGetProductRequest() {
  yield takeLatest(GET_PRODUCTS, fetchData);
  // yield takeEvery(SEARCH_PRODUCTS, searchData);
}
export default watchGetProductRequest;

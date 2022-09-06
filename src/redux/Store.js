// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Slices/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// REDUX SAGA
import createSagaMiddleware from "redux-saga";
import watchGetProductRequest from "./redux-saga/root";
import { createStore, applyMiddleware, compose } from "redux";
import { reducer, initialState } from "./redux-saga/reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
  )
);
sagaMiddleware.run(watchGetProductRequest);

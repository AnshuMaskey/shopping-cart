// import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = { item: [], cart: [] };

// export const fetchProduct = createAsyncThunk("cart/fetchProduct", async () => {
//   const res = await axios("https://fakestoreapi.com/products");

//   console.log(res.data, "res");
//   return res.data;
// });

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//       state.cart.push(action.payload);
//     },
//     remove(state, action) {
//       return state.item.filter((item) => item.id !== action.payload);
//     },
//   },
//   extraReducers: {
//     [fetchProduct.rejected]: (state, action) => {
//       // returns 'Opps there seems to be an error'
//       console.log(action.payload);
//     },
//     [fetchProduct.fulfilled]: (state, action) => {
//       state.item = action.payload;
//     },
//   },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

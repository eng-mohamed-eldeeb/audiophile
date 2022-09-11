import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart_slice";

const store = configureStore({cart: cartSlice.reducer})

export default store;
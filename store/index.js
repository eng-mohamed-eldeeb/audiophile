import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart_slice";

const store = configureStore({ reducer: cartSlice })

export default store;
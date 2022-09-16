import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    VAT: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const {newItem, amount} = action.payload;
      const exisitingItems = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQuantity = state.totalQuantity + amount;
      if (!exisitingItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: amount,
          totalPrice: newItem.price,
          main_img: newItem.main_img,
          name: newItem.name,
        });
      } else {
        exisitingItems.quantity = exisitingItems.quantity + amount;
      }
      state.VAT = state.totalPrice / 5;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisitiongItem = state.items.find((item) => item.id === id);
      if (state.totalQuantity > 0) {
        state.totalQuantity--;
        if (exisitiongItem === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          exisitiongItem.quantity--;
          exisitiongItem.totalPrice =
            exisitiongItem.totalPrice - exisitiongItem.price;
        }
      }
      state.VAT = state.totalPrice / 5;
    },
    removeAll(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.VAT = 0
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeAll } =
  cartSlice.actions;

export default cartSlice;

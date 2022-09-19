import { createSlice } from "@reduxjs/toolkit";
const UpdateLocalStorage = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      ...state,
    })
  );
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    VAT: 0,
  },
  reducers: {
    loadCartState(state, action) {
      const localData = localStorage.getItem("cart");
      if (!localData) {
        localData = {
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
          VAT: 0,
        };
        localStorage.setItem("cart", JSON.stringify(localData));
      }
      return JSON.parse(localStorage.getItem("cart"));
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if(existingItem.quantity === 0) return
      state.totalPrice = state.totalPrice - existingItem.price;
      state.totalQuantity = state.totalQuantity - 1;
      existingItem.quantity = existingItem.quantity - 1;
      state.VAT = state.totalPrice / 5;
      UpdateLocalStorage({ ...state });
    },
    addItemToCart(state, action) {
      const { newItem, amount } = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQuantity = state.totalQuantity + amount;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: amount,
          totalPrice: newItem.price,
          main_img: newItem.main_img,
          name: newItem.name,
        });
      } else {
        existingItems.quantity = existingItems.quantity + amount;
      }
      state.VAT = state.totalPrice / 5;
      UpdateLocalStorage({ ...state });
    },
    addASingleItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      state.totalPrice = state.totalPrice + existingItem.price;
      state.totalQuantity = state.totalQuantity + 1;
      existingItem.quantity = existingItem.quantity + 1;
      state.VAT = state.totalPrice / 5;
      UpdateLocalStorage({ ...state });
    },
    removeAll(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.VAT = 0;
      UpdateLocalStorage({ ...state });
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  addASingleItemToCart,
  removeAll,
  loadCartState,
} = cartSlice.actions;

export default cartSlice.reducer;

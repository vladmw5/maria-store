import { createSlice } from "@reduxjs/toolkit";
import * as cartOperations from "./cart.operations";
import { Order } from "../../service/model";

export type CartState = Order;

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [cartOperations.addProductToCart.toString()]: (
      state: CartState,
      { payload }
    ) => {
      for (const item of state.items) {
        if (item._id === payload._id) {
          item.quantity += 1;
          return;
        }
      }
      state.items.push({ _id: payload._id, quantity: 1 });
    },
    [cartOperations.removeProductFromCart.toString()]: (
      state: CartState,
      { payload }
    ) => {
      let targetId = "";
      for (const item of state.items) {
        if (item._id === payload._id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            targetId = item._id;
          }
          break;
        }
      }
      if (!targetId) {
        return;
      }
      state.items = state.items.filter((item) => item._id !== targetId);
    },
    [cartOperations.deleteProductFromCart.toString()]: (
      state: CartState,
      { payload }
    ) => {
      let targetId = "";
      for (const item of state.items) {
        if (item._id === payload._id) {
          targetId = item._id;
          break;
        }
      }
      if (!targetId) {
        return;
      }
      state.items = state.items.filter((item) => item._id !== targetId);
    },
    [cartOperations.clearCart.toString()]: (state: CartState) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

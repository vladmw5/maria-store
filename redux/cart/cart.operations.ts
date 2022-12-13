import { createAction } from "@reduxjs/toolkit";

export const addProductToCart = createAction<{ _id: string }>("cart/add");
export const removeProductFromCart = createAction<{ _id: string }>(
  "cart/remove"
);
export const deleteProductFromCart = createAction<{ _id: string }>(
  "cart/delete"
);
export const clearCart = createAction("cart/clear");

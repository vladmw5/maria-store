import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer, { AuthState } from "./auth/auth.slice";
import cartReducer, { CartState } from "./cart/cart.slice";

export interface CoreState {
  auth: AuthState;
  cart: CartState;
}

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn", "user", "isAdmin"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
});

export default persistStore(store);

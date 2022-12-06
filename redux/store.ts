import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer, { AuthState } from "./auth/auth.slice";

export interface CoreState {
  auth: AuthState;
}

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export default persistStore(store);

import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./auth.operations";

export interface AuthState {
  token: string;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isRefreshing: boolean;
  hasRegisterError: boolean;
  hasLoginError: boolean;
  hasLogoutError: boolean;
}

const initialState: AuthState = {
  token: "",
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isRefreshing: false,
  hasRegisterError: false,
  hasLoginError: false,
  hasLogoutError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.pending.toString()]: (state: AuthState) => {
      state.isLoggingIn = true;
      state.hasRegisterError = false;
      state.hasLoginError = false;
    },
    [authOperations.register.fulfilled.toString()]: (
      state: AuthState,
      { payload }
    ) => {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoggingIn = false;
    },
    [authOperations.register.rejected.toString()]: (state: AuthState) => {
      state.isLoggingIn = false;
      state.hasRegisterError = true;
    },

    [authOperations.login.pending.toString()]: (state: AuthState) => {
      state.isLoggingIn = true;
      state.hasRegisterError = false;
      state.hasLoginError = false;
    },
    [authOperations.login.fulfilled.toString()]: (
      state: AuthState,
      { payload }
    ) => {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoggingIn = false;
    },
    [authOperations.login.rejected.toString()]: (state: AuthState) => {
      state.isLoggingIn = false;
      state.hasLoginError = true;
    },

    [authOperations.logout.pending.toString()]: (state: AuthState) => {
      state.hasLogoutError = false;
      state.isLoggingOut = true;
    },
    [authOperations.logout.fulfilled.toString()]: (state: AuthState) => {
      state.isLoggedIn = false;
      state.isLoggingOut = false;
      state.token = "";
    },
    [authOperations.logout.rejected.toString()]: (state: AuthState) => {
      state.isLoggingOut = false;
      state.hasLogoutError = true;
    },
    [authOperations.forceLogout.toString()]: (state: AuthState) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export default authSlice.reducer;

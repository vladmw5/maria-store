import { CoreState } from "../store";

export const getUser = (state: CoreState) => state.auth.user;
export const getToken = (state: CoreState) => state.auth.token;
export const getIsAdmin = (state: CoreState) => state.auth.isAdmin;
export const getIsLoggedIn = (state: CoreState) => state.auth.isLoggedIn;
export const getIsLoggingIn = (state: CoreState) => state.auth.isLoggingIn;
export const getIsLoggingOut = (state: CoreState) => state.auth.isLoggingOut;
export const getIsRefreshing = (state: CoreState) => state.auth.isRefreshing;
export const getHasRegisterError = (state: CoreState) =>
  state.auth.hasRegisterError;
export const getHasLoginError = (state: CoreState) => state.auth.hasLoginError;
export const getHasLogoutError = (state: CoreState) =>
  state.auth.hasLogoutError;

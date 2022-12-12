import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import API from "../../service";
import { Credentials } from "../../service/model";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: Credentials) => {
    const { data } = await API.sendRegisterCredentialsQuery(credentials);
    console.log(data);
    API.authHeader.set(data.accessToken);
    return data;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    const { data } = await API.sendLoginCredentialsQuery(credentials);
    API.authHeader.set(data.accessToken);
    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await API.sendLogoutQuery();
  API.authHeader.unset();
});

export const forceLogout = createAction("auth/forceLogout");

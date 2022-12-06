import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import API from "../../service";
import { Credentials } from "../../service/model";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.sendRegisterCredentialsQuery(credentials);
      console.log(data);
      API.authHeader.set(data.token);
      return data;
    } catch (error: any) {
      rejectWithValue(error.response.status);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.sendLoginCredentialsQuery(credentials);
      API.authHeader.set(data.token);
      return data;
    } catch (error: any) {
      rejectWithValue(error.response.status);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await API.sendLogoutQuery();
      API.authHeader.unset();
    } catch (error: any) {
      rejectWithValue(error.response.status);
    }
  }
);

export const forceLogout = createAction("auth/forceLogout");

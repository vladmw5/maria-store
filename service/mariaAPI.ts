import axios from "axios";
import { Credentials } from "./model";

const BASE_URL = "localhost:8000";

axios.defaults.baseURL = BASE_URL;

export const authHeader = {
  set: (token: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

const registerEndpoint = "/register";
const loginEndpoint = "/login";
const logoutEndpoint = "/logout";

export const sendRegisterCredentialsQuery = (credentials: Credentials) =>
  axios.post(registerEndpoint, credentials);

export const sendLoginCredentialsQuery = (credentials: Credentials) =>
  axios.post(loginEndpoint, credentials);

export const sendLogoutQuery = () => axios.patch(logoutEndpoint);

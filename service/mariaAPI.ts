import axios from "axios";
import { Credentials, productsListQueryBody, Product } from "./model";

const BASE_URL = "http://localhost:8000/";

axios.defaults.baseURL = BASE_URL;

export const authHeader = {
  set: (token: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

const registerEndpoint = "registration";
const loginEndpoint = "login";
const logoutEndpoint = "logout";
const productsEndpoint = "products";
const ordersEndpoint = "orders";

export const sendRegisterCredentialsQuery = (credentials: Credentials) =>
  axios.post(registerEndpoint, credentials);

export const sendLoginCredentialsQuery = (credentials: Credentials) =>
  axios.post(loginEndpoint, credentials);

export const sendLogoutQuery = () => axios.patch(logoutEndpoint);

export const getAllProductsQuery = (queryParams: productsListQueryBody) =>
  axios.post(`${productsEndpoint}/list`, queryParams);

export const getProductByIdQuery = (id: string) =>
  axios.get(`${productsEndpoint}/${id}`);

export const createProductQuery = (product: Product) =>
  axios.post(productsEndpoint, product);

export const changeProductQuery = (id: string) =>
  axios.patch(`${productsEndpoint}/${id}`);

export const deleteProductQuery = (id: string) =>
  axios.delete(`${productsEndpoint}/${id}`);

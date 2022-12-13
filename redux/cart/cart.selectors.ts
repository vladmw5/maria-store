import { CoreState } from "../store";

export const getCartItems = (state: CoreState) => state.cart.items;

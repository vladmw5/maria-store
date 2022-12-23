export type Measurement = "кг" | "шт";
export interface Credentials {
  email: string;
  password: string;
}

export interface productsListQueryBody {
  sortBy?: "price" | "name";
  page: number;
  quantityPerPage: number;
  types?: string[];
  isOnlyAvailable?: boolean;
  minPrice?: number;
  maxPrice?: number;
  search: string;
}

export interface ProductSchema {
  measurement: "кг" | "шт";
  name: string;
  price: number;
  stockAmount: number;
  productBigImage?: string;
  description?: string;
  type: string;
}

export interface Order {
  items: CartObject[];
}

export interface CartObject {
  _id: string;
  quantity: number;
}

export interface OrderResponseObject {
  totalPrice: number;
  __v: number;
  _id: string;
  createdAt: string;
  items: any[];
  userId: {
    email: string;
    _id: string;
  };
}

export interface Product {
  createdAt: string;
  description: string;
  measurement: Measurement;
  name: string;
  price: number;
  productBigImage: string;
  stockAmount: number;
  type: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

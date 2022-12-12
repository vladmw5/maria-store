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

export interface Product {
  measurement: "кг" | "шт";
  name: string;
  price: number;
  stockAmount: number;
  productBigImage?: string;
  description?: string;
  type: string;
}

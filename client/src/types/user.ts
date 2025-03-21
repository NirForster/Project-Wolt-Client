import { Order } from "./order";

export interface User {
  email: string;
  fname: string;
  lname: string;
  phone: number;
  photo: string;
  locations: UserLocation[];
  favoritesShops: string[];
  cart: Order[];
  fullname: string;
}

export interface UserLocation {
  type: "Home" | "Work" | "Other";
  address: string;
  lastLocation: boolean;
}

import { IOrder } from "./order";

export interface User {
  email: string;
  fname: string;
  lname: string;
  phone: number;
  photo: string;
  locations: UserLocation[];
  favoritesShops: string[];
  cart: IOrder[];
  fullname: string;
}

export interface UserLocation {
  type: string;
  address: string;
  lastLocation: boolean;
}

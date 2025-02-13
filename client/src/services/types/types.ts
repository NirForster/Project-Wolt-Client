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

export interface IOrder {
  user: string;
  shop: string;
  createdAt: Date;
  deliveringTime?: number;
  items: {
    product: string;
    quantity: number;
    pricePerUnit: number;
  }[];
  hasSent: boolean;
  totalPrice: number; // Virtual property
}

export interface Details {
  kind: string;

  entrance: string;

  numberOnDoor: string;

  locationLabel: "Home" | "Work" | "Other";
}

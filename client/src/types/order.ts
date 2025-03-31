import { Business } from "./business";

// order.ts
export interface Order {
  _id?: string;
  user: string;
  shop: string | Business;
  createdAt: Date;
  deliveringTime?: number;
  items: OrderItem[] | string[]; // Allow both expanded items and IDs
  hasSent: boolean;
  totalPrice: number;
}

export interface OrderItem {
  _id?: string;
  order?: string;
  item: {
    name: string;
    image: string;
    description?: string;
  };
  sectionTitle: string;
  pricePerUnit: number;
  quantity: number;
  extras: string[];
  totalPrice?: number; // Optional because it's calculated
}

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
  totalPrice: number;
}

export interface Review {
  _id: string;
  business: string;
  user: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

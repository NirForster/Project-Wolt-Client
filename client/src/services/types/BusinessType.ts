export default interface Business {
  address: {
    _id: string;
    id: string;
    name: string;
    zip: string;
  };
  businessDescription: string;
  coverImage: string;
  deliveryFeeStructure: {
    _id: string;
    id: string;
    spanText: string;
    text: string;
  }[];
  deliveryTimes: TimeObj[];
  description: string;
  id: string;
  name: string;
  openingTimes: TimeObj[];
  phoneNumber: string;
  rating: number;
  reviews: [];
  type: string;
  website: string;
  __v: number;
  _id: string;
}
interface TimeObj {
  day:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  time: string;
  _id: string;
}

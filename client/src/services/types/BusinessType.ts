export default interface Business {
  summery: BusinessSummery;
  _id: string;
  __v: number;
  id: string;
  additionalInfo: BusinessAdditionalInfo;
}

export interface BusinessAdditionalInfo {
  address: {
    name: string;
    zip: string;
  };
  businessDescription: string;
  coverImage: string;
  deliveryFeeStructure: {
    id: string;
    spanText: string;
    text: string;
    _id: string;
  }[];
  deliveryTimes: TimeObj[];
  openingTimes: TimeObj[];
  phoneNumber: string;
  website: string;
}

export interface BusinessSummery {
  dollarCount: string;
  estimatedDeliveryTime: {
    min: string;
    max: string;
  };
  image: string;
  label: {
    deliveryFee: string;
    storeType: any;
  };
  link: string;
  location: {
    address: string;
    city: string;
  };
  name: string;
  rating: number;
  shortDescription: string;
  type: "restaurant" | "store";
  _id: string;
}

export interface TimeObj {
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

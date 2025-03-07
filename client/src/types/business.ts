export interface Business {
  summery: BusinessSummary;
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
  _id?: string; // Make _id optional for frontend usage
}

export interface BusinessSummary {
  id: string; // Frontend ID
  _id?: string; // Backend ID (optional in frontend)
  type: "restaurant" | "store";
  location: {
    city: string;
    address: string;
    coordinates?: { lat: number; lon: number }; // Optional for frontend
  };
  name: string;
  link: string;
  image: string;
  shortDescription: string;
  estimatedDeliveryTime: { min: number; max: number };
  rating: number;
  dollarCount: "$" | "$$" | "$$$" | "$$$$";
  label: {
    deliveryFee?: string;
    storeType?: string;
  };
}

export interface BusinessWithSummary {
  _id: string;
  summary: BusinessSummary;
  additionalInfo: BusinessAdditionalInfo;
  categories: string[];
  __v: number;
}

export interface BusinessDetails {
  summary: BusinessSummary; // Summary information
  additionalInfo: BusinessAdditionalInfo; // Detailed information
  categories: string[];
}

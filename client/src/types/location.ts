// Location types from
export interface Details {
  kind: string;
  entrance: string;
  numberOnDoor: string;
  locationLabel: "Home" | "Work" | "Other";
}

// City types
export interface City {
  name: string;
  slug: string;
}

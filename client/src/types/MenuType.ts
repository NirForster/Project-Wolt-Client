export interface Menu {
  business: string;
  businessName: string;
  id: string;
  __b: number;
  _id: string;
  sections: Section[];
}

export interface Section {
  sectionDescription: string;
  sectionTitle: string;
  _id: string;
  items: Item[];
}

export interface Item {
  description: string;
  id: string;
  image: string;
  isPopular: boolean;
  name: string;
  price: string;
  _id: string;
  formData: {
    description: string;
    id: string;
    title: string;
    type: "radio" | "checkbox";
    options: {
      id: string;
      _id: string;
      optionLabel: string;
      optionPrice: string;
    }[];
  }[];
}

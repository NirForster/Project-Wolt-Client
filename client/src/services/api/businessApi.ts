import api from "./api"; // Axios instance
import { cityService } from "@/lib/constants/cities-constants";

// Interfaces
export interface BusinessSummary {
  id: string;
  type: "restaurant" | "store";
  location: { city: string; address: string };
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

export interface BusinessAdditionalInfo {
  coverImage: string;
  businessDescription?: string;
  address: { name: string; zip: string };
  openingTimes: { day: string; time: string }[];
  deliveryTimes: { day: string; time: string }[];
  deliveryFeeStructure: { text: string; spanText: string }[];
  phoneNumber: string;
  website: string;
}

export interface BusinessDetails {
  summary: BusinessSummary; // Summary information
  additionalInfo: BusinessAdditionalInfo; // Detailed information
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  isPopular: boolean;
  formData?: {
    title: string;
    description?: string;
    type: "radio" | "checkbox";
    options: { optionLabel: string; optionPrice: string }[];
  }[];
}

export interface Menu {
  business: string; // ID of the restaurant or store
  businessName: string;
  sections: {
    sectionTitle: string;
    sectionDescription?: string;
    items: MenuItem[];
  }[];
}

// API Calls

/**
 * Fetch all businesses of a specific type
 * @param type - "store" or "restaurant"
 * @returns Promise<BusinessSummary[]>
 */
export const fetchAllBusinesses = async (
  type: "store" | "restaurant"
): Promise<BusinessSummary[]> => {
  try {
    const response = await api.get(`/business?type=${type}`);
    console.log(`Fetched all ${type}s:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching all ${type}s:`, error);
    throw error;
  }
};

/**
 * Fetch businesses in a specific city
 * @param city.name - Name of the city
 * @param type - "restaurants" or "stores"
 * @returns Promise<BusinessSummary[]>
 */
export const fetchBusinessesByCity = async (
  citySlug: string,
  type: "restaurants" | "stores"
): Promise<BusinessSummary[]> => {
  try {
    const city = cityService.find((c) => c.slug === citySlug);

    if (!city) {
      console.error(
        "City Service:",
        cityService.map((c) => c.slug)
      );
      console.error("Input Slug:", citySlug);
      throw new Error(`City with slug '${citySlug}' not found.`);
    }

    const response = await api.get(`/business/cities/${city.name}/${type}`);
    // console.log(`Fetched ${type} in ${city.name}:`, response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${type} in ${citySlug}:`, error);
    throw error;
  }
};

/**
 * Fetch full details of a specific business
 * @param id - Business ID
 * @returns Promise<BusinessSummary>
 */
export const fetchBusinessById = async (
  id: string
): Promise<BusinessSummary> => {
  try {
    const response = await api.get(`/business/${id}`);
    console.log("Fetched Business Details:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching business with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch menu for a specific business
 * @param businessId - ID of the business
 * @returns Promise<Menu>
 */
export const fetchMenuByBusinessId = async (
  businessId: string
): Promise<Menu> => {
  try {
    const response = await api.get(`/business/${businessId}/menu`);
    console.log("Fetched Menu:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu for business ID ${businessId}:`, error);
    throw error;
  }
};

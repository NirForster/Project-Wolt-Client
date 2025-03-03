import api from "./api"; // Axios instance
import { cityService } from "@/lib/constants/cities-constants";

// Interfaces
import { BusinessSummary, BusinessWithSummary, Menu } from "@/types";

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

// API Call to Fetch Businesses by Categories
export const fetchBusinessesByCategory = async (
  cityName: string,
  type: "restaurant" | "store"
): Promise<Record<string, BusinessWithSummary[]>> => {
  try {
    const response = await api.get(
      `/business/cities/${cityName}/${type}/categories`
    );
    // console.log(
    //   `Fetched businesses grouped by category in ${cityName}:`,
    //   response.data
    // );
    return response.data;
  } catch (error) {
    console.log(cityName);
    console.error(`Error fetching businesses grouped by category:`, error);
    throw error;
  }
};

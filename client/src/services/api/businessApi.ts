import api from "./api"; // Axios instance

// Interfaces
export interface BusinessSummary {
  id: string;
  city: string;
  name: string;
  link: string;
  image: string;
  description?: string;
  estimatedDeliveryTime: { min: number; max: number };
  rating: number;
  dollarCount: "$" | "$$" | "$$$" | "$$$$";
  label: {
    deliveryFee?: string;
    storeType?: string;
  };
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
 * @param cityName - Name of the city
 * @param type - "restaurants" or "stores"
 * @returns Promise<BusinessSummary[]>
 */
export const fetchBusinessesByCity = async (
  cityName: string,
  type: "restaurants" | "stores"
): Promise<BusinessSummary[]> => {
  try {
    const response = await api.get(`/business/cities/${cityName}/${type}`);
    console.log(`Fetched ${type} in ${cityName}:`, response.data.data);

    // Include city in the returned data
    const businesses = response.data.data.map((business: any) => ({
      id: business._id, // Ensure mapping to "id"
      city: business.city, // Include city
      name: business.name,
      link: business.link,
      image: business.image,
      description: business.description,
      estimatedDeliveryTime: business.estimatedDeliveryTime,
      rating: business.rating,
      dollarCount: business.dollarCount,
      label: business.label,
    }));

    return businesses;
  } catch (error) {
    console.error(`Error fetching ${type} in ${cityName}:`, error);
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

// for grid view:

// Fetch all restaurants across all cities
export const fetchAllRestaurants = async (): Promise<BusinessSummary[]> => {
  try {
    const response = await api.get(`/cities/restaurants`);
    console.log("Fetched all restaurants:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching all restaurants:", error);
    throw error;
  }
};

// Fetch all stores across all cities
export const fetchAllStores = async (): Promise<BusinessSummary[]> => {
  try {
    const response = await api.get(`/cities/stores`);
    console.log("Fetched all stores:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching all stores:", error);
    throw error;
  }
};

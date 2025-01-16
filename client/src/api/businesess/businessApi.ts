import api from "../../services/api"; // Axios instance

// Interfaces
export interface Restaurant {
  name: string;
  description: string;
  deliveryTime: string;
  image: string;
  link: string;
  deliveryFee: string;
  dollarCount: String;
  rating: number;
  id: string;
  category: string;
}

export interface Shop {
  name: string;
  description: string;
  deliveryTime: string;
  image: string;
  link: string;
  deliveryFee: string;
  dollarCount: String;
  rating: number;
  id: string;
  category: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

// Restaurant Calls
// Fetch all restaurants
export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await api.get("/shop/all"); // Matches updated backend route
    console.log("API Response:", response.data); // Log response
    return response.data.shops; // Adjust based on the actual structure
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

// Fetch a single restaurant by ID
export const fetchRestaurantById = async (id: string): Promise<Restaurant> => {
  try {
    const response = await api.get(`/shop/${id}`); // Matches updated backend route
    return response.data;
  } catch (error) {
    console.error(`Error fetching restaurant with ID ${id}:`, error);
    throw error;
  }
};

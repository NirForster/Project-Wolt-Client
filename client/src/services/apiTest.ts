// src/services/apiTest.ts
import api from "./api";

export const testShopApiConnection = async () => {
  try {
    const response = await api.get("/api/v1/shop/677a63689a501924d5bf1b25");
    console.log("Shop API Response:", response.data);
    alert(`Success: ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error testing the Shop API:",
      error.response?.data || error.message
    );
    alert(`Error: ${error.response?.data?.message || error.message}`);
  }
};

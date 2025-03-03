// export default api;
import axios from "axios";
import { ApiResponse } from "@/types";

// Create axios instance with default config
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000",
  withCredentials: true, // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor to standardize response structure
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error("API Error:", message);
    return Promise.reject({
      status: "Error",
      message,
      code: error.response?.status,
    });
  }
);

export default api;

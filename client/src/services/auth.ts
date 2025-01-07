// src/services/auth.ts
import api from "./api";

// Login Function
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post(
      "/api/v1/auth/login",
      { email, password },
      { withCredentials: true } // Ensure cookies are sent
    );
    alert("Login successful!");
    localStorage.setItem("token", response.data.token); // Store the token if needed
    return response.data;
  } catch (error: any) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Signup Function
export const signup = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post("/api/v1/auth/signup", {
      name,
      email,
      password,
    });
    alert("Signup successful!");
    return response.data;
  } catch (error: any) {
    console.error(
      "Signup error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Logout Function
export const logout = async () => {
  try {
    const response = await api.post("/api/v1/auth/logout");
    alert("You have been logged out.");
    return response.data;
  } catch (error: any) {
    console.error(
      "Logout error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Fetch Current User
export const fetchCurrentUser = async () => {
  try {
    const response = await api.get("/api/v1/auth/me");
    return response.data;
  } catch (error: any) {
    console.error(
      "Failed to fetch user:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

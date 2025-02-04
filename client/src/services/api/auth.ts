// src/services/auth.ts
import api from "./api";

// Send email Function
export const sendEmail = async (email: string, lastURL: string) => {
  try {
    const response = await api.post(
      "/auth/sendemail",
      { email, lastURL },
      { withCredentials: true } // Ensure cookies are sent
    );
    // alert("Login successful!");
    return response.data;
  } catch (error: any) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Send email Function
export const login = async (token: string) => {
  try {
    const response = await api.post(
      "/auth/login",
      { token },
      { withCredentials: true } // Ensure cookies are sent
    );
    // alert("Login successful!");
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
export const signup = async (
  fname: string,
  lname: string | undefined,
  email: string,
  // password: string,
  phone: string
) => {
  try {
    const response = await api.post(
      "/auth/signup",
      {
        fname,
        lname, // Optional last name
        email,
        // password,
        phone,
      },
      { withCredentials: true }
    );
    // alert("Signup successful!");
    localStorage.setItem("token", response.data.token); // Store the token if needed
    return response.data;
  } catch (error: any) {
    console.error(
      "Signup error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Logout Function with Cookies
export const logout = async () => {
  try {
    await api.get("/auth/logout", { withCredentials: true }); // Use GET for logout
    // alert("You have been logged out.");
  } catch (error: any) {
    console.error(
      "Logout error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Fetch Current User (Updated to call /me)
export const fetchCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me", {});
    return response.data.user;
  } catch (error: any) {
    console.error(
      "Failed to fetch user:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

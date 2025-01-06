import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000", // Backend URL
  withCredentials: true, // Include cookies in requests
});

export default api;

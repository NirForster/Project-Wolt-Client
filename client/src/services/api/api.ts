// export default api;
import axios from "axios";

// Create axios instance with default config
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000",
  withCredentials: true, // Include cookies in requests
});

export default api;

// test

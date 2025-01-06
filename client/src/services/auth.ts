import api from "./api";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const signup = async (details: {
  name: string;
  email: string;
  password: string;
  plan: string;
}) => {
  const response = await api.post("/auth/signup", details);
  return response.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
};

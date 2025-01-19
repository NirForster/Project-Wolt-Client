import api from "@/services/api";

const getUserById = async () => {
  try {
    const response = await api.get(`/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID `, error);
    return null;
  }
};

export default getUserById;

import api from "@/services/api/api";

const getUserById = async () => {
  try {
    const response = await api.get(`/v1/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID `, error);
    return null;
  }
};

export default getUserById;

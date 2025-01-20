import api from "@/services/api/api";

const getUserCart = async () => {
  try {
    const response = await api.get(`/user/cart`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID `, error);
    return null;
  }
};

export default getUserCart;

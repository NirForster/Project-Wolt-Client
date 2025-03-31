import api from "@/services/api/api";
import { Order } from "@/types";

const getUserCart = async () => {
  try {
    const response = await api.get(`/user/cart`, {
      withCredentials: true,
    });
    console.log(response.data.cart);

    return response.data;
  } catch (error) {
    console.error(`Failed to fetch cart with ID `, error);
    return null;
  }
};

export default getUserCart;

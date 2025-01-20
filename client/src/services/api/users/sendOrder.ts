import api from "@/services/api/api";

const sendOrder = async () => {
  try {
    const response = await api.get(`/orders/send`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID `, error);
    return null;
  }
};

export default sendOrder;

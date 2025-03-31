import api from "@/services/api/api";

const sendOrder = async (orderID: string) => {
  try {
    const response = await api.put(
      `/orders/send`,
      { orderID },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID `, error);
    return null;
  }
};

export default sendOrder;

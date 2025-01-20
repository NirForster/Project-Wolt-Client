import api from "@/services/api/api";

const deleteUser = async () => {
  try {
    const response = await api.delete(`/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID `, error);
    return null;
  }
};

export default deleteUser;

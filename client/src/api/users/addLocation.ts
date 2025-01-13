import api from "@/services/api";

const addLocationToUser = async (type) => {
  try {
    const response = await api.get(`/v1/user/locations/add`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to add location to this user `, error);
    return null;
  }
};

export default addLocationToUser;

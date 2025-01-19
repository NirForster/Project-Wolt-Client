import api from "@/services/api";

const addLocationToUser = async (
  type: "Home" | "Work" | "Other",
  address: string
) => {
  try {
    const response = await api.put(`/user/locations/add`, {
      type,
      address,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to add location to this user `, error);
    return null;
  }
};

export default addLocationToUser;

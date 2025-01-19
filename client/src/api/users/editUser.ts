import api from "@/services/api";

const editUser = async (
  email?: string,
  fname?: string,
  lname?: string,
  phone?: number
) => {
  try {
    const response = await api.put(`/user`, {
      email,
      fname,
      lname,
      phone,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to add location to this user `, error);
    return null;
  }
};

export default editUser;

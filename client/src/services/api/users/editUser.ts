import api from "@/services/api/api";

const editUser = async (
  email?: string,
  fname?: string,
  lname?: string,
  phone?: number
) => {
  try {
    const response = await api.put(`/user`, {
      ...(email && { email }),
      ...(fname && { fname }),
      ...(lname && { lname }),
      ...(phone && { phone }),
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to update the user:`, error);
    return null;
  }
};

export default editUser;

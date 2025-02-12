import axios from "axios";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const getCoordinatesFromAddress = async (address: string) => {
  try {
    console.log("Fetching coordinates for:", address);

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    );

    console.log("Geocode API response:", response.data);

    if (response.data.status === "OK") {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      console.error("Geocoding API error:", response.data.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return null;
  }
};

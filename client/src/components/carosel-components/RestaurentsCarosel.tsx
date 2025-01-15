import { useState, useEffect } from "react";
import { CarouselSpacing } from "./CaroselTemplate";
import api from "@/services/api";

interface Restaurant {
  id: string;
  name: string;
  category: string;
  photo: string;
}

const RestaurentsCarosel = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await api.get("/api/v1/shop/all");

        // ✅ Accessing the 'shops' array correctly
        if (response.data && Array.isArray(response.data.shops)) {
          setRestaurants(response.data.shops);
        } else {
          console.error("API response is not an array", response.data);
          setRestaurants([]); // Prevents runtime errors
        }
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        setRestaurants([]); // Prevents crashing in case of error
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <CarouselSpacing restaurants={restaurants} />
    </div>
  );
};

export default RestaurentsCarosel;

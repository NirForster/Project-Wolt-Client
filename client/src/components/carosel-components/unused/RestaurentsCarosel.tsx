import React, { useEffect, useState } from "react";
import {
  fetchRestaurants,
  Restaurant,
} from "../../../api/businesess/businessApi";

const RestaurantsCarousel: React.FC = () => {
  const [carouselItems, setCarouselItems] = useState<Restaurant[]>([]);

  useEffect(() => {
    const getCarouselData = async () => {
      try {
        const data = await fetchRestaurants();
        console.log("Fetched Data:", data); // Debug log
        setCarouselItems(data); // Ensure data is an array
      } catch (error) {
        console.error("Error loading carousel data:", error);
      }
    };

    getCarouselData();
  }, []);

  return (
    <div className="carousel-container flex overflow-x-auto space-x-4">
      {Array.isArray(carouselItems) && carouselItems.length > 0 ? (
        carouselItems.map((item) => (
          <div
            key={item.id}
            className="carousel-item flex-shrink-0 w-64 bg-white rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No restaurants available.</p>
      )}
    </div>
  );
};

export default RestaurantsCarousel;

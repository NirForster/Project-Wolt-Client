import React, { useEffect, useState } from "react";
import { fetchRestaurants, Restaurant } from "../../services/api/businessApi";
import RestaurantCard from "../SingleRestaurantCard";

const RestaurantsGrid: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to load restaurants:", error);
      }
    };

    loadRestaurants();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            photo={restaurant.image}
            deliveryTime={restaurant.deliveryTime} // Temporary placeholder
            deliveryFee={restaurant.deliveryFee} // Temporary placeholder
            priceRange={restaurant.dollarCount} // Placeholder
            rating={restaurant.rating} // Placeholder
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsGrid;

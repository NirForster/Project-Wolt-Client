import React, { useEffect, useState } from "react";
import { fetchBusinessesByCity, BusinessSummary } from "../../api/businessApi";
import BusinessCard from "../BusinessCard";

interface RestaurantsGridViewProps {
  cityName: string; // Allow cityName to be passed as a prop
}

const RestaurantsGridView: React.FC<RestaurantsGridViewProps> = ({
  cityName,
}) => {
  const [restaurants, setRestaurants] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchBusinessesByCity(
          cityName || "TLV - Herzliya area",
          "restaurants"
        );
        console.log(`Loaded Restaurants in ${cityName}:`, data);
        setRestaurants(data);
      } catch (error) {
        console.error(`Failed to load restaurants in ${cityName}:`, error);
      }
    };

    if (cityName) loadRestaurants();
  }, [cityName]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Restaurants in {cityName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <BusinessCard
            key={restaurant.id}
            id={restaurant.id}
            city={restaurant.city}
            type="restaurant"
            name={restaurant.name}
            description={restaurant.description}
            image={restaurant.image}
            link={restaurant.link}
            estimatedDeliveryTime={restaurant.estimatedDeliveryTime}
            rating={restaurant.rating}
            dollarCount={restaurant.dollarCount}
            label={{
              deliveryFee: restaurant.label.deliveryFee || "N/A",
              storeType: restaurant.label.storeType || "N/A",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsGridView;

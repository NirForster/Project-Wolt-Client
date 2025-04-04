import React, { useEffect, useState } from "react";
import {
  fetchBusinessesByCity,
  BusinessSummary,
} from "../../services/api/businessApi";
import BusinessCard from "../BusinessCard";
import { unslugCityName } from "@/lib/constants/cities-constants";

interface RestaurantsGridViewProps {
  cityName: string;
}

const RestaurantsGridView: React.FC<RestaurantsGridViewProps> = ({
  cityName,
}) => {
  const [restaurants, setRestaurants] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchBusinessesByCity(cityName, "restaurants");
        console.log(`Loaded Restaurants in ${cityName}:`, data);
        setRestaurants(data);
      } catch (error) {
        console.error(`Failed to load restaurants in ${cityName}:`, error);
      }
    };

    loadRestaurants();
  }, [cityName]);

  const unslugedCity = unslugCityName(cityName || "tlv-herzliya-area");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Restaurants in {unslugedCity}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <BusinessCard
            city={cityName}
            key={restaurant.id}
            id={restaurant.id}
            type="restaurant"
            name={restaurant.name}
            description={restaurant.shortDescription}
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

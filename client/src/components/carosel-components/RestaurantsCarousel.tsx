import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchBusinessesByCity,
  BusinessSummary,
} from "../../services/api/businessApi";
import BusinessCard from "../BusinessCard";

interface RestaurantsCarouselProps {
  cityName: string; // Allow cityName to be passed as a prop
}

const RestaurantsCarousel: React.FC<RestaurantsCarouselProps> = ({
  cityName,
}) => {
  const [restaurants, setRestaurants] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchBusinessesByCity(cityName, "restaurants");
        // console.log(`Loaded Restaurants in ${cityName}:`, data);
        setRestaurants(data);
      } catch (error) {
        console.error(`Failed to load restaurants in ${cityName}:`, error);
      }
    };

    loadRestaurants();
  }, [cityName]);

  return (
    <Carousel
      items={restaurants}
      title="Popular Restaurants Right Now"
      renderItem={(restaurant: BusinessSummary) => (
        <BusinessCard
          city={cityName}
          key={restaurant.id}
          id={restaurant.id}
          type={restaurant.type}
          name={restaurant.name}
          link={restaurant.link}
          image={restaurant.image}
          description={restaurant.shortDescription}
          estimatedDeliveryTime={restaurant.estimatedDeliveryTime}
          rating={restaurant.rating}
          dollarCount={restaurant.dollarCount}
          label={restaurant.label}
        />
      )}
      seeAllLink={`/discovery/restaurants/${cityName}`}
    />
  );
};

export default RestaurantsCarousel;

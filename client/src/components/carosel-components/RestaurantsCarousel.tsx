import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchAllRestaurants,
  BusinessSummary,
} from "../../api/businesess/businessApi";
import SingleRestaurantCard from "../BusinessCard"; // Import the SingleRestaurantCard component

const RestaurantsCarousel = () => {
  const [restaurants, setRestaurants] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchAllRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    };

    loadRestaurants();
  }, []);

  return (
    <Carousel
      items={restaurants}
      title="Popular Restaurants Right Now"
      renderItem={(restaurant) => (
        <SingleRestaurantCard
          key={restaurant.id}
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
      )}
      seeAllLink="discovery/restaurants"
    />
  );
};

export default RestaurantsCarousel;

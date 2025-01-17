import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import { fetchRestaurants, Restaurant } from "../../api/businesess/businessApi";
import SingleRestaurantCard from "../SingleRestaurantCard"; // Import the SingleRestaurantCard component

const RestaurantsCarousel = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
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
      title="Popular Right Now"
      renderItem={(restaurant) => (
        <SingleRestaurantCard
          name={restaurant.name}
          description={restaurant.description}
          photo={restaurant.image}
          deliveryTime={restaurant.deliveryTime} // Placeholder data
          deliveryFee={restaurant.deliveryFee} // Placeholder data
          priceRange={restaurant.dollarCount} // Placeholder data
          rating={restaurant.rating} // Placeholder data
        />
      )}
      seeAllLink="/restaurants"
    />
  );
};

export default RestaurantsCarousel;

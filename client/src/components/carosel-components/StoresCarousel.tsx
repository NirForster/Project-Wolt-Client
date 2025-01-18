import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchAllStores,
  BusinessSummary,
} from "../../api/businesess/businessApi";
import SingleRestaurantCard from "../BusinessCard"; // Import the SingleRestaurantCard component

const StoresCarousel = () => {
  const [stores, setstores] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadstores = async () => {
      try {
        const data = await fetchAllStores();
        setstores(data);
      } catch (error) {
        console.error("Failed to fetch stores:", error);
      }
    };

    loadstores();
  }, []);

  return (
    <Carousel
      items={stores}
      title="Popular Stores Right Now"
      renderItem={(stores) => (
        <SingleRestaurantCard
          key={stores.id}
          name={stores.name}
          description={stores.description}
          image={stores.image}
          link={stores.link}
          estimatedDeliveryTime={stores.estimatedDeliveryTime}
          rating={stores.rating}
          dollarCount={stores.dollarCount}
          label={{
            deliveryFee: stores.label.deliveryFee || "N/A",
            storeType: stores.label.storeType || "N/A",
          }}
        />
      )}
      seeAllLink="discovery/stores"
    />
  );
};

export default StoresCarousel;

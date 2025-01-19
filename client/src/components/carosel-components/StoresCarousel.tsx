import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchBusinessesByCity,
  BusinessSummary,
} from "../../services/api/businessApi";
import BusinessCard from "../BusinessCard";

interface storesCarouselProps {
  cityName: string; // Allow cityName to be passed as a prop
}

const StoresCarousel: React.FC<storesCarouselProps> = ({ cityName }) => {
  const [stores, setStores] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadStores = async () => {
      try {
        const data = await fetchBusinessesByCity(cityName, "stores");
        // console.log(`Loaded Stores in ${cityName}:`, data);
        setStores(data);
      } catch (error) {
        console.error(`Failed to load Stores in ${cityName}:`, error);
      }
    };

    loadStores();
  }, [cityName]);

  return (
    <Carousel
      items={stores}
      title="Popular Stores Right Now"
      renderItem={(store: BusinessSummary) => (
        <BusinessCard
          city={cityName}
          key={store.id}
          id={store.id}
          type={store.type}
          name={store.name}
          link={store.link}
          image={store.image}
          description={store.shortDescription}
          estimatedDeliveryTime={store.estimatedDeliveryTime}
          rating={store.rating}
          dollarCount={store.dollarCount}
          label={store.label}
        />
      )}
      seeAllLink="discovery/stores"
    />
  );
};

export default StoresCarousel;

import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchBusinessesByCity,
  BusinessSummary,
} from "../../services/api/businessApi";
import BusinessCard from "../BusinessCard";

interface MultiCarouselProps {
  cityName: string; // Allow cityName to be passed as a prop
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ cityName }) => {
  const [businesses, setBusinesses] = useState<BusinessSummary[]>([]);
  const CAROUSEL_COUNT = 3; // Number of carousels
  const ITEMS_PER_CAROUSEL = 10; // Number of businesses per carousel

  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        const data = await fetchBusinessesByCity(cityName, "restaurants");
        setBusinesses(data);
      } catch (error) {
        console.error(`Failed to load businesses in ${cityName}:`, error);
      }
    };

    loadBusinesses();
  }, [cityName]);

  // Split businesses into chunks for each carousel
  const carousels = [];
  for (let i = 0; i < CAROUSEL_COUNT; i++) {
    carousels.push(
      businesses.slice(i * ITEMS_PER_CAROUSEL, (i + 1) * ITEMS_PER_CAROUSEL)
    );
  }

  return (
    <div>
      {carousels.map((carouselItems, index) => (
        <Carousel
          key={index}
          items={carouselItems}
          title={`Carousel ${index + 1}`}
          renderItem={(business: BusinessSummary) => (
            <BusinessCard
              city={cityName}
              key={business.id}
              id={business.id}
              type={business.type}
              name={business.name}
              link={business.link}
              image={business.image}
              description={business.shortDescription}
              estimatedDeliveryTime={business.estimatedDeliveryTime}
              rating={business.rating}
              dollarCount={business.dollarCount}
              label={business.label}
            />
          )}
          seeAllLink={`/discovery/restaurants/${cityName}/carousel/${
            index + 1
          }`}
        />
      ))}
    </div>
  );
};

export default MultiCarousel;

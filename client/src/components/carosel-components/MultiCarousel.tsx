import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchBusinessesByCategory,
  BusinessWithSummary,
} from "@/services/api/businessApi";
import BusinessCard from "../BusinessCard";
import { cityService } from "@/lib/constants/cities-constants";

interface MultiCarouselProps {
  cityName: string;
  categoryProp: string;
  titleProp: string;
  type: "restaurant" | "store";
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({
  cityName,
  type,
  categoryProp,
  titleProp,
}) => {
  const [businesses, setBusinesses] = useState<BusinessWithSummary[]>([]);

  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        const data = await fetchBusinessesByCategory(cityName, type);
        // Filter businesses by category
        const filteredBusinesses = data[categoryProp] || [];
        setBusinesses(filteredBusinesses);
        console.log("Filtered data: ", filteredBusinesses);
      } catch (error) {
        console.error(
          `Failed to load businesses for ${type} in category ${categoryProp} at ${cityName}:`,
          error
        );
      }
    };

    loadBusinesses();
  }, [cityName, categoryProp, type]);

  const citySlug = cityService.find((city) => city.name === cityName)?.slug;

  return (
    <div>
      {businesses.length > 0 && (
        <Carousel
          items={businesses.slice(0, 1000)} // Limit to 1000 businesses
          title={titleProp}
          renderItem={(business: BusinessWithSummary) => (
            <BusinessCard
              city={cityName}
              key={business._id}
              id={business._id}
              type={business.summary.type}
              name={business.summary.name}
              link={business.summary.link}
              image={business.summary.image}
              description={business.summary.shortDescription}
              estimatedDeliveryTime={business.summary.estimatedDeliveryTime}
              rating={business.summary.rating}
              dollarCount={business.summary.dollarCount}
              label={business.summary.label}
            />
          )}
          seeAllLink={`/discovery/${type}/${
            citySlug || "unknown-city"
          }/category/${categoryProp.toLowerCase().replace(/\s+/g, "-")}`}
        />
      )}
    </div>
  );
};

export default MultiCarousel;

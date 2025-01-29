import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchBusinessesByCategory,
  BusinessWithSummary, // Use the new type
} from "@/services/api/businessApi";
import BusinessCard from "../BusinessCard";
import { cityService } from "@/lib/constants/cities-constants";

interface MultiCarouselProps {
  cityName: string;
  type: "restaurant" | "store";
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ cityName, type }) => {
  const [businessesByCategory, setBusinessesByCategory] = useState<{
    [category: string]: BusinessWithSummary[];
  }>({});

  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        const data = await fetchBusinessesByCategory(cityName, type);
        setBusinessesByCategory(data);
        console.log("Fetched data: ", data);
      } catch (error) {
        console.error(
          `Failed to load businesses grouped by category in ${cityName}:`,
          error
        );
      }
    };

    loadBusinesses();
  }, [cityName, type]);

  const citySlug = cityService.find((city) => city.name === cityName)?.slug;

  const flatBusinesses = Object.entries(businessesByCategory).flatMap(
    ([category, businesses]) =>
      businesses.map((business) => ({
        ...business,
        category, // Add category to each business
      }))
  );

  console.log(flatBusinesses);

  return (
    <div>
      {Object.entries(businessesByCategory).map(([category, businesses]) => {
        if (businesses.length === 0) return null;

        // Generate a clean category slug (replace spaces with hyphens)
        const categorySlug = category.toLowerCase().replace(/\s+/g, "-");

        return (
          <Carousel
            key={category}
            items={businesses.slice(0, 1000)} // Limit to 10 businesses
            title={category}
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
            }/category/${categorySlug}`}
          />
        );
      })}
    </div>
  );
};

export default MultiCarousel;

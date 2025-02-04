import { useEffect, useState } from "react";
import Carousel from "./GenericCarouselComponent";
import {
  fetchBusinessesByCategory,
  BusinessWithSummary,
} from "@/services/api/businessApi";
import BusinessCard from "../BusinessCard";
import { cityService } from "@/lib/constants/cities-constants";
import { filterBusinesses } from "@/utils/filtersForCarousel"; // ✅ Import filters

interface MultiCarouselProps {
  cityName: string;
  categoryProp?: string;
  titleProp?: string;
  type: "restaurant" | "store" | "business";
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({
  cityName,
  type,
  categoryProp = "",
  titleProp = "",
}) => {
  const [businesses, setBusinesses] = useState<BusinessWithSummary[]>([]);

  useEffect(() => {
    const loadBusinesses = async () => {
      try {
        let filteredBusinesses: BusinessWithSummary[] = [];

        if (type === "business") {
          // ✅ Fetch both restaurants and stores
          const restaurants = await fetchBusinessesByCategory(
            cityName,
            "restaurant"
          );
          const stores = await fetchBusinessesByCategory(cityName, "store");

          // console.log("API Response - Restaurants:", restaurants);
          // console.log("API Response - Stores:", stores);

          // ✅ Extract and flatten the category-based data
          const restaurantList = restaurants
            ? Object.values(restaurants).flat()
            : [];
          const storeList = stores ? Object.values(stores).flat() : [];

          // console.log("Flattened Restaurants:", restaurantList);
          // console.log("Flattened Stores:", storeList);

          // ✅ Merge and remove duplicates
          const mergedBusinesses = [...restaurantList, ...storeList];
          const uniqueBusinessesMap = new Map();
          mergedBusinesses.forEach((business) => {
            uniqueBusinessesMap.set(business._id, business);
          });

          filteredBusinesses = Array.from(uniqueBusinessesMap.values());

          // ✅ Apply only **title-based filtering**
          filteredBusinesses = filterBusinesses(filteredBusinesses, titleProp);
        } else {
          // ✅ Fetch only restaurants or stores
          const data = await fetchBusinessesByCategory(cityName, type);
          let allBusinesses = data ? Object.values(data).flat() : [];

          // ✅ If category is provided, filter by category
          if (categoryProp) {
            allBusinesses = data?.[categoryProp] ?? [];
          }

          // ✅ Apply title-based filtering if needed
          filteredBusinesses = filterBusinesses(allBusinesses, titleProp);
        }

        // console.log("Filtered Businesses:", filteredBusinesses);
        setBusinesses(filteredBusinesses);
      } catch (error) {
        console.error(
          `Failed to load businesses for ${type} in category ${categoryProp} at ${cityName}:`,
          error
        );
      }
    };

    loadBusinesses();
  }, [cityName, categoryProp, type, titleProp]);

  const citySlug = cityService.find((city) => city.name === cityName)?.slug;

  return (
    <div>
      {businesses.length > 0 && (
        <Carousel
          items={businesses.slice(0, 1000)} // ✅ Limit to 1000 businesses
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
          }/${categoryProp.toLowerCase().replace(/\s+/g, "-")}`}
        />
      )}
    </div>
  );
};

export default MultiCarousel;

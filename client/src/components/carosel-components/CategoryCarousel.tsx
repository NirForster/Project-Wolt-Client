import React from "react";
import MultiCarousel from "./MultiCarousel";

interface CategoryCarouselProps {
  categoryName: string; // E.g., "restaurants" or "stores"
  cityName: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categoryName,
  cityName,
}) => {
  return (
    <div className="category-carousel">
      <h2 className="text-xl font-semibold mb-4 capitalize">{categoryName}</h2>
      <MultiCarousel cityName={cityName} />
    </div>
  );
};

export default CategoryCarousel;

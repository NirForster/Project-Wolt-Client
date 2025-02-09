import React from "react";
import fallback_image from "@/assets/fallback-image.avif";
import styles from "./CategoryCarouselCard.module.css";

interface BusinessCategoryCardProps {
  category: string;
  image?: string;
  link: string;
  businessCount: number;
}

const BusinessCategoryCard: React.FC<BusinessCategoryCardProps> = ({
  category,
  image,
  link,
  businessCount,
}) => {
  return (
    <div className={`${styles.categoryCard} snap-start`}>
      <a href={link} className="block border rounded-lg overflow-hidden">
        <div className="relative w-full">
          <img
            src={image || fallback_image}
            alt={category}
            className=" h-44 w-44 object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="p-2 text-center bg-gray-100 rounded-b-lg p-[16px]">
            <h3 className="text-lg font-semibold text-start">{category}</h3>
            <p className="text-sm text-gray-600 text-start">
              {businessCount} places
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BusinessCategoryCard;

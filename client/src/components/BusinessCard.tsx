import React from "react";
import { Link } from "react-router-dom";

import {
  DeliveryIcon,
  SmileRatingIcon,
  CouponIcon,
} from "./ui/icons-for-businessCard";

interface BusinessCardProps {
  id: string;
  city: string;
  type: "restaurant" | "store";
  name: string;
  image: string;
  description?: string;
  estimatedDeliveryTime?: { min: number; max: number };
  rating: number;
  dollarCount: "$" | "$$" | "$$$" | "$$$$";
  label?: {
    deliveryFee?: string;
    storeType?: string;
  };
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  city,
  type,
  name,
  image,
  description,
  estimatedDeliveryTime = { min: 0, max: 0 },
  rating,
  dollarCount,
  label = {},
}) => {
  const businessPath = type === "restaurant" ? "restaurant" : "venue";

  const boldDollarCount = dollarCount.length;
  const remainingDollarCount = 4 - boldDollarCount;

  return (
    <Link
      to={`/en/isr/${city}/${businessPath}/${id}`}
      className="block bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105 shadow-sm w-full max-w-[372px]"
    >
      {" "}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover " />

        {label?.deliveryFee && (
          <div
            className={
              "absolute top-4 left-4 text-white text-sm px-3 py-1 rounded-full flex items-center bg-woltColors-brandBg"
            }
          >
            <CouponIcon />
            {label.deliveryFee}
          </div>
        )}
      </div>
      <div className="">
        <div className="flex justify-between items-start gap-4 p-4 pb-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-lg mb-1 truncate">{name}</h3>
            <p className="text-gray-600 text-sm truncate">{description}</p>
          </div>
          <div className="bg-blue-50 text-woltColors-brandBg py-2 rounded-lg text-center flex-shrink-0 w-[60px]">
            <div className="text-sm">
              {estimatedDeliveryTime.min}-{estimatedDeliveryTime.max}
            </div>
            <div className="text-xs">min</div>
          </div>
        </div>

        <div className="mt-4 p-4 pt-2 border-t-[1px] border-gray-300 border-dashed flex items-center text-sm text-gray-500">
          <div className="flex items-center space-x-4 min-w-0">
            <span className="flex items-center flex-shrink-0 text-woltColors-brandBg">
              <DeliveryIcon />
              <span className=" font-medium">₪0.00</span>
            </span>
            <span className="flex-shrink-0">•</span>
            <span className="flex items-center flex-shrink-0">
              <span className="font-bold">{dollarCount}</span>
              <span className="text-gray-300">
                {Array(remainingDollarCount).fill("$").join("")}
              </span>
            </span>
            <span className="flex-shrink-0">•</span>
            <div className="flex items-center flex-shrink-0">
              <span>
                <SmileRatingIcon />
              </span>
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;

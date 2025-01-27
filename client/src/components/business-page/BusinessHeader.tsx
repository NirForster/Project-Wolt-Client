import { userContext } from "@/providers/userContext";
import api from "@/services/api/api";
import { useContext, useEffect, useState } from "react";
import LoginModel from "../auth-components/Login/LoginModel";
import {
  BusinessAdditionalInfo,
  BusinessSummery,
} from "@/services/types/BusinessType";
import BusinessMoreInfoModal from "./BusinessMoreInfoModal";
import smiley_web_happy from "@/assets/lottie-files/smiley_web_happy.json";
import smiley_web_speechless from "@/assets/lottie-files/smiley_web_speechless.json";
import Lottie from "lottie-react";

interface BusinessHeaderProps {
  business: {
    summary: BusinessSummery;
    additionalInfo: BusinessAdditionalInfo;
  };
  shopID: string;
}

export default function BusinessHeader({
  business,
  shopID,
}: BusinessHeaderProps) {
  const { user } = useContext(userContext);
  const [animationKey, setAnimationKey] = useState(0); // Used to restart animation
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);

  const serviceFeeMsg = "Service fee up to 5%, ₪1.00-₪5.90";
  const badges = [
    `Delivery: ${business.additionalInfo.deliveryFeeStructure[0].spanText}`,
    `Min. order: ${business.additionalInfo.deliveryFeeStructure[1].spanText}`,
    `Delivery in ${business.summary.estimatedDeliveryTime.min}-${business.summary.estimatedDeliveryTime.max} min`,
    serviceFeeMsg,
    `w+ Min. order: ₪60.00`,
  ];

  async function handleOnHeartClick() {
    if (user) {
      const isCurrent = !isInFavorites;
      const result = await api.put(
        `/favorites/${isCurrent ? "add" : "remove"}`,
        {
          shopID,
        }
      );
      setIsInFavorites(isCurrent);
    } else {
      console.log("bye bye");
      setIsLoginModalOpen(true);
    }
  }

  useEffect(() => {
    setIsInFavorites(
      user
        ? user.favoritesShops.some((shop) => {
            return shop.toString() === shopID;
          })
        : false
    );
  }, []);

  const dayIndex = new Date().getDay();
  const currentDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][dayIndex];
  const openingTimesOfToday = business.additionalInfo.openingTimes.find(
    (times) => {
      return times.day === currentDay;
    }
  );
  let openTimeMsg: string = "Open Until ";
  if (openingTimesOfToday) {
    const workingTime = openingTimesOfToday.time;
    if (workingTime === "All day") {
      openTimeMsg = "Open all the day";
    } else {
      openTimeMsg = openTimeMsg.concat(workingTime.split("–")[1]);
    }
  } else {
    openTimeMsg = "Closed";
  }

  let ratingMsg = "";
  let ratingLottie = null;

  // Use Math.floor or Math.round for integer conversion if needed
  const businessRating = business.summary.rating;

  if (businessRating > 7.5) {
    ratingMsg = `${businessRating.toFixed(1)}`;
    ratingLottie = smiley_web_happy;
  } else if (businessRating > 5) {
    ratingMsg = ` ${businessRating.toFixed(1)}`;
    ratingLottie = smiley_web_speechless;
  } else {
    ratingMsg = ` ${businessRating.toFixed(1)}`;
    ratingLottie = smiley_web_speechless; // Optionally add a different animation for low ratings
  }

  return (
    <>
      <div className="w-full h-fit relative">
        <img
          src={business.additionalInfo.coverImage}
          alt={`cover image for ${name}`}
          className="w-full z-0"
        />
        <div className="z-10 bg-[#00000075] absolute top-0 h-full left-0 w-full flex justify-between items-end p-10">
          <div className="flex flex-col text-white gap-8">
            <p className="text-[28px] sm:text-[46px] font-woltHeader">
              {business.summary.name}
            </p>
            <p className="text-[16px] sm:text-[18px]">
              {business.additionalInfo.businessDescription || ""}
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((currentBadge, index) => {
                return (
                  <p
                    key={index}
                    className="text-black text-[12px] bg-white rounded-lg p-1"
                  >
                    {currentBadge}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <button
              className="bg-black p-5 rounded-full opacity-85"
              onClick={handleOnHeartClick}
            >
              <img
                src={`/assets/photos/heart${isInFavorites ? "-fill" : ""}.png`}
                alt={`${
                  isInFavorites ? "Remove from favorites" : "Add to favorites"
                }`}
                className="min-w-5"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-fit p-4 flex flex-col sm:flex-row justify-between bg-white items-center">
        <div className="flex gap-4">
          <div className="flex gap-1">
            <img src="/assets/photos/clock.png" alt="clock" className="h-5" />
            <span>{openTimeMsg}</span>
          </div>
          <p>{ratingMsg}</p>
          <div onMouseLeave={() => setAnimationKey((prev) => prev + 1)}>
            <Lottie
              animationData={ratingLottie}
              loop={false}
              autoplay={true} // Start animation on first render
              key={animationKey} // Change key to restart animation
            />
          </div>
          <p>{serviceFeeMsg}</p>
          <button
            onClick={() => {
              setIsMoreModalOpen(true);
            }}
          >
            <p className="cursor-pointer text-[#039de0]">More</p>
          </button>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-[#D6EFFA] text-[#009de0] p-2 rounded-lg cursor-pointer gap-1 w-fit whitespace-nowrap items-center">
            <img src="/assets/photos/calendar-badge-clock.png" alt="calender" />
            <span className="">Schedule order</span>
          </div>
          <div className="flex bg-[#D6EFFA] text-[#009de0] p-2 rounded-lg cursor-pointer gap-1 w-fit whitespace-nowrap items-center">
            <img
              src="/assets/photos/person-2-badge-plus-fill.png"
              alt="order together"
            />
            <span className="">Order together</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isLoginModalOpen && (
        <LoginModel onClose={() => setIsLoginModalOpen(false)} />
      )}
      {isMoreModalOpen && (
        <BusinessMoreInfoModal
          onClose={() => setIsMoreModalOpen(false)}
          business={business}
        />
      )}
    </>
  );
}

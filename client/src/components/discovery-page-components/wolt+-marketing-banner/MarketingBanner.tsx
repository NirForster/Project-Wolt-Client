import deliveryMan from "@/assets/banner_wolt_plus.avif";
import { WoltLogo } from "./Wolt+Svg";

const MarketingBanner = () => {
  return (
    <div className="relative w-full py-4 h-32 my-8">
      {/* Container to handle the overflowing image */}
      <div className="relative max-w-full h-32 mx-auto">
        {/* Blue background banner */}
        <div className="bg-[#01c0e5] rounded-2xl h-24 w-full relative z-10">
          {/* Content container */}
          <div className="flex items-center justify-between h-full px-4 relative">
            <div className="w-20">
              <WoltLogo />
            </div>
            {/* Text */}
            <div className="flex flex-row justify-between">
              <div className="text-white text-2xl font-semibold font-woltHeader ml-48">
                Skip the delivery fees with Wolt+
              </div>

              {/* Button */}
              <button className="bg-white text-[#00D1E7] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 ml-8 transition-colors">
                Join now
              </button>
            </div>
          </div>
        </div>

        {/* Scooter image that overflows */}
        <div className="absolute left-20 bottom-0 h-[200%] -mb-8 z-20">
          <img
            src={deliveryMan}
            alt="Wolt+ Delivery"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingBanner;

// test

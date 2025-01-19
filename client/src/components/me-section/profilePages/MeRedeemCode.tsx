import React from "react";
import RedeemAnimation from "./RedeemAnimation";

const MeRedeemCode: React.FC = () => {
  return (
    <div className="max-w-[450px] w-full mx-auto flex flex-col items-center rounded-lg p-6">
      <div className="max-w-[350px] w-full">
        <RedeemAnimation />
      </div>
      <h2 className="text-2xl font-bold text-black mt-2 mb-4 font-woltHeader">
        Redeem code
      </h2>
      <div className="my-2 text-gray-500 font-medium text-center ">
        If you have Wolt gift card or promo code, enter it below to claim your
        benefits!
      </div>

      <div className="relative max-w-[400px] w-full mt-6 mb-10">
        <input
          type="text"
          placeholder="Enter code.."
          className="bg-gray-100 w-full border border-gray-300 rounded-lg text-2xl p-5 pr-[110px]" // Add padding-right to avoid text overlapping with button
        />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:cursor-pointer rounded-lg gap-2 flex items-center justify-center w-[100px] h-[54px] bg-BlueBackgroundAndText">
          <p className="text-[17px] font-bold text-white">Redeem</p>
        </div>
      </div>
    </div>
  );
};

export default MeRedeemCode;

import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import earnCreditsVideo from "@/assets/Screen Recording 2025-01-16 at 16.53.59.mov";

const MeEarnCredits: React.FC = () => {
  return (
    <div className="max-w-[500px] w-full mx-auto flex flex-col items-center rounded-lg p-6">
      <div>
        <video autoPlay loop muted src={earnCreditsVideo}>
          Your browser does not support the video tag.
        </video>
      </div>
      <h2 className="text-2xl font-bold text-black mb-4 font-woltHeader">
        Invite friends and get discounts
      </h2>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="h-8 w-14 flex justify-center items-center rounded-full bg-blue-100 text-BlueBackgroundAndText font-bold">
            1
          </div>
          <p className="text-gray-700">
            Your friends will get <b>₪15.00</b> in Wolt credits when they use
            your code for each of their first 2 delivery orders.
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="h-8 w-20 flex justify-center items-center rounded-full bg-blue-100 text-BlueBackgroundAndText font-bold">
            2
          </div>
          <p className="text-gray-700">
            You’ll get <b>₪15.00</b> in Wolt credits for each of your friend’s
            first 2 delivery orders. You can earn a maximum of <b>₪300.00</b> in
            credits by inviting your friends to join Wolt.
          </p>
        </div>
      </div>
      <a
        href="#"
        className="text-BlueBackgroundAndText text-[16px] mt-6 mb-2 block"
      >
        How do referral codes work?
      </a>

      <div className="flex items-center justify-between bg-gray-100 max-w-[500px] w-full border border-gray-300 rounded-lg mt-6 p-3">
        <div className="flex flex-col ml-4 ">
          <p className="block text-gray-500 mb-2 font-medium">
            Your referral code
          </p>
          <span className="text-black text-2xl flex-1">3NAZWKU</span>
        </div>
        <button className="text-gray-500 border rounded-full p-2 mr-2 hover:text-blue-500">
          <FiShare2 size={20} />
        </button>
      </div>
      <div className="mt-4">
        <span className="text-gray-500 font-medium">Share your promo code</span>
      </div>

      <div className="flex justify-between items-center space-x-4 mt-4">
        <button className=" border rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          <FaFacebook size={24} />
        </button>

        <button className="border rounded-full p-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
          <FaXTwitter size={24} />
        </button>
        <button className="border rounded-full p-2 hover:bg-cyan-800 hover:text-white transition duration-300 ease-in-out">
          <FaLinkedin size={24} />
        </button>
      </div>
    </div>
  );
};

export default MeEarnCredits;

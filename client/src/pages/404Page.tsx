import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import AppBar from "@/components/main-layout-components/AppBar";
import scientist_error_3 from "@/assets/lottie-files/scientist_error_3-2.json";

const Error404Page: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <main id="mainContent" className="flex flex-col ">
      <AppBar />
      <div className="flex flex-col items-center justify-start pt-12 lg:justify-center min-h-screen bg-white text-center px-6 h-[100vh]">
        {/* Lottie Animation */}
        <div className="relative mb-8 ">
          {scientist_error_3 ? (
            <Lottie
              animationData={scientist_error_3}
              loop={true}
              className="w-full h-full"
            />
          ) : (
            <p>Loading animation...</p>
          )}
        </div>
        {/* Error Message */}
        <h1 className="text-[2rem] line-[2.5rem] mb-6 md:text-[46px] font-bold text-woltColors-textDefault font-woltHeader ">
          Something unexpected happened
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-woltColors-textSubdued mb-6">
          Unfortunately, we couldn't find the content you were looking for.
          Sorry for the hassle!
        </p>

        {/* Back to Wolt Button */}
        <button
          onClick={handleBackToHome}
          className="px-6 py-3 bg-[#ebf7fd] text-woltColors-brandBg font-semibold rounded-lg hover:bg-[#d6effa] text-[1rem]"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default Error404Page;

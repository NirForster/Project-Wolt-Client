import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const EmailAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the animation data on component mount
  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(
          "https://consumer-static-assets.wolt.com/lottie/assets/girl_verify_email_3-2.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };
    fetchAnimation();
  }, []);

  return (
    <div>
      {" "}
      {/* Lottie Animation */}
      <div className="relative mb-8 ">
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
    </div>
  );
};

export default EmailAnimation;

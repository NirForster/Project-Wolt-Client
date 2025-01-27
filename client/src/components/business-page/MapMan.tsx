import { useState, useEffect } from "react";
import Lottie from "lottie-react";

interface MapGuyErrProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function MapGuyErr({ filter, setFilter }: MapGuyErrProps) {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the animation data on component mount
  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(
          "https://consumer-static-assets.wolt.com/lottie/assets/guy_map_3-2.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };
    fetchAnimation();
  }, []);

  function handleClick() {
    setFilter("");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {/* Lottie Animation */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-8 w-2/3 flex flex-col items-center justify-center">
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
        <div className="font-woltHeader flex flex-col items-center justify-center text-[32px] gap-4">
          <span>"{filter}"</span>
          <span>No results found</span>
        </div>
      </div>
      <button onClick={handleClick} className="text-[#009de0]">
        Clear search<search></search>
      </button>
    </div>
  );
}

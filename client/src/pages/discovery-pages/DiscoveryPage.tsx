import { useParams } from "react-router-dom";
import RestaurantsCarousel from "@/components/carosel-components/RestaurantsCarousel";
import StoresCarousel from "@/components/carosel-components/StoresCarousel";

const DiscoveryPage = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div className="p-0">
      <RestaurantsCarousel cityName={city || "TLV - Herzliya area"} />
      <StoresCarousel cityName={city || "TLV - Herzliya area"} />
    </div>
  );
};

export default DiscoveryPage;

import { useParams } from "react-router-dom";
import MultiCarousel from "@/components/carosel-components/MultiCarousel";
import { unslugCityName } from "@/lib/constants/cities-constants";

const DiscoveryPage = () => {
  const { city } = useParams<{ city: string }>();
  const unslugedCity = unslugCityName(city || "tlv-herzliya-area");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">
        Explore {unslugedCity || "TLV - Herzliya area"}
      </h1>
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
      />
    </div>
  );
};

export default DiscoveryPage;

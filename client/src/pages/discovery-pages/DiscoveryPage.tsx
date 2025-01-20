import { useParams } from "react-router-dom";
import CategoryCarousel from "@/components/carosel-components/CategoryCarousel";

const DiscoveryPage = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Explore {city}</h1>
      <CategoryCarousel
        categoryName="restaurants"
        cityName={city || "TLV - Herzliya area"}
      />
      <CategoryCarousel
        categoryName="stores"
        cityName={city || "TLV - Herzliya area"}
      />
    </div>
  );
};

export default DiscoveryPage;

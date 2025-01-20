import { useParams } from "react-router-dom";
import RestaurantsGridView from "@/components/discovery-grid-components/GridRestaurantsView";

const DiscoveryRestaurants = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div>
      <RestaurantsGridView cityName={city || "TLV - Herzliya area"} />
    </div>
  );
};

export default DiscoveryRestaurants;

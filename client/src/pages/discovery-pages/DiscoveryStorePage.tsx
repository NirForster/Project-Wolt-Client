import { useParams } from "react-router-dom";
import StoresGridView from "@/components/discovery-grid-components/GridStoresView";

const DiscoveryStorePage = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div>
      <StoresGridView cityName={city || "TLV - Herzliya area"} />
    </div>
  );
};

export default DiscoveryStorePage;

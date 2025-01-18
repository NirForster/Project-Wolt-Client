import RestaurantsCarousel from "@/components/carosel-components/RestaurantsCarousel";
import StoresCarousel from "@/components/carosel-components/StoresCarousel";

const DiscoveryPage = () => {
  return (
    <div className="p-0">
      <RestaurantsCarousel />
      <StoresCarousel />
    </div>
  );
};

export default DiscoveryPage;

import CategoriesCarousel from "@/components/carosel-components/CategoriesCarousel";
import RestaurantsCarousel from "@/components/carosel-components/RestaurantsCarousel";
import StoresCarousel from "@/components/carosel-components/StoresCarousel";

const DiscoveryPage = () => {
  return (
    <div className="p-0">
      <RestaurantsCarousel />
      <StoresCarousel />
      <CategoriesCarousel />
    </div>
  );
};

export default DiscoveryPage;

import { useParams } from "react-router-dom";
import RestaurantsGridView from "@/components/discovery-grid-components/GridRestaurantsView";
import CategoriesCarosel from "@/components/discovery-page-components/business-category-components/CategoriesCarosel";
import { restaurantCategories } from "@/lib/constants/categories-constants";

const DiscoveryRestaurants = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div className="px-8 py-[30px]">
      <div className="header_and_filter flex justify-between pb-5 items-center">
        <h1 className="font-woltHeader font-semibold text-[40px]">
          Restaurants near me
        </h1>
        <h3>
          Sorted By{" "}
          <span className="font-semibold">
            Recommended
            {/* dynamic - changes by filter select */}
          </span>
        </h3>
      </div>
      <CategoriesCarosel
        categories={restaurantCategories}
        title="I feel like eating.."
      />
      <RestaurantsGridView cityName={city || "TLV - Herzliya area"} />
    </div>
  );
};

export default DiscoveryRestaurants;

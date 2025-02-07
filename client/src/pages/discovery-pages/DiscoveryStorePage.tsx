import { useParams } from "react-router-dom";
import StoresGridView from "@/components/discovery-grid-components/GridStoresView";
import CategoriesCarosel from "@/components/discovery-page-components/business-category-components/CategoriesCarosel";
import { allStoreCategories } from "@/lib/constants/categories-constants";

const DiscoveryStorePage = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div className="px-8 py-[30px]">
      <div className="header_and_filter flex justify-between pb-5 items-center">
        <h1 className="font-woltHeader font-semibold text-[40px]">
          Stores and supermarkets near me
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
        categories={allStoreCategories}
        title="Let's shop for:"
      />
      <StoresGridView cityName={city || "TLV - Herzliya area"} />
    </div>
  );
};

export default DiscoveryStorePage;

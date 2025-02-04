import { useParams } from "react-router-dom";
import MultiCarousel from "@/components/carosel-components/MultiCarousel";
import { unslugCityName } from "@/lib/constants/cities-constants";
import CategoriesCarosel from "@/components/discovery-page-components/business-category-components/CategoriesCarosel";
import ProductLineGrid from "@/components/discovery-page-components/category-product-line/ProductLineGrid";
import HeroCarousel from "@/components/discovery-page-components/HeroCarousel";
import MarketingBanner from "@/components/discovery-page-components/MarketingBanner";
import MealTimeCarousel from "@/components/discovery-page-components/MealTimeCarousel";
import BrandsCarousel from "@/components/discovery-page-components/BrandsCarousel";
import QuickLinks from "@/components/discovery-page-components/QuickLinks";
import {
  restaurantCategories,
  storeCategories,
  foodStoreCategories,
} from "@/lib/constants/categories-constants";

const DiscoveryPage = () => {
  const { city } = useParams<{ city: string }>();
  const unslugedCity = unslugCityName(city || "tlv-herzliya-area");

  return (
    <div className="p-4">
      <ProductLineGrid />
      <HeroCarousel />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Lunch"
        titleProp="Lunch near you (demo)"
      />
      <MarketingBanner />
      <CategoriesCarosel
        categories={restaurantCategories}
        title="I feel like eating.."
      />
      <CategoriesCarosel
        categories={foodStoreCategories}
        title="Grocery list 🛒"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        titleProp="Popular right now"
      />
      <CategoriesCarosel categories={storeCategories} title="Our stores 🛍️" />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="business"
        titleProp="0 ₪ delivery fee (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
        categoryProp="Grocery"
        titleProp="Groceries list👇🏻"
      />
      {/* <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Burger"
        titleProp="0 ₪ delivery fee with Wolt+ (demo)"
      /> */}
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Burger"
        titleProp="For burger lovers"
      />
      <MealTimeCarousel />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        titleProp="It’s a DEAL 💰 (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="business"
        titleProp="Top-rated"
      />
      <BrandsCarousel
      // Tasty brands 🍽️
      // Brands
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
        categoryProp="Grocery"
        titleProp="Top grocery picks"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Dessert"
        titleProp="Sweet Cravings 🍪🍫"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
        categoryProp="Care and Beauty"
        titleProp="Pharm & Beauty stores 💊💄"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Asian"
        titleProp="Local favorites (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        titleProp="Wallet friendly"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Mediterranean"
        titleProp="Offers near you (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Vegan"
        titleProp="Vegan & vegetarian friendly"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Kids Meals"
        titleProp="New restaurants on Wolt (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
        categoryProp="Deli"
        titleProp="New stores on Wolt (demo)"
      />
      <QuickLinks />
    </div>
  );
};

export default DiscoveryPage;

import { useParams } from "react-router-dom";
import MultiCarousel from "@/components/carosel-components/MultiCarousel";
import { unslugCityName } from "@/lib/constants/cities-constants";
import CategoriesCarosel from "@/components/discovery-page-components/CategoriesCarosel";
import ProductLineGrid from "@/components/discovery-page-components/ProductLineGrid";
import HeroCarousel from "@/components/discovery-page-components/HeroCarousel";
import MarketingBanner from "@/components/discovery-page-components/MarketingBanner";
import MealTimeCarousel from "@/components/discovery-page-components/MealTimeCarousel";
import BrandsCarousel from "@/components/discovery-page-components/BrandsCarousel";
import QuickLinks from "@/components/discovery-page-components/QuickLinks";
import MarketingBanner_2 from "@/components/discovery-page-components/MarketingBanner_2";

const DiscoveryPage = () => {
  const { city } = useParams<{ city: string }>();
  const unslugedCity = unslugCityName(city || "tlv-herzliya-area");

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-6">
        Explore {unslugedCity || "TLV - Herzliya area"}
      </h1> */}
      <ProductLineGrid />
      <HeroCarousel />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Lunch"
        titleProp="Lunch near you"
      />
      <MarketingBanner />
      <CategoriesCarosel
      // I feel like eating..
      // Restaurant Categories
      />
      <CategoriesCarosel
      // Grocery list 🛒
      // Store Categories
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Street Food"
        titleProp="Popular right now (demo)"
      />
      <CategoriesCarosel
      // Our stores 🛍️
      // Store Categories
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Street Food"
        titleProp="0 ₪ delivery fee (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
        categoryProp="Grocery"
        titleProp="Groceries list👇🏻"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Burger"
        titleProp="0 ₪ delivery fee with Wolt+ (demo)"
      />
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
        categoryProp="Homemade"
        titleProp="It’s a DEAL 💰 (demo)"
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="restaurant"
        categoryProp="Sweets"
        titleProp="Top-rated (demo)"
      />
      <BrandsCarousel
      // Tasty brands 🍽️
      // Brands
      />
      <MultiCarousel
        cityName={unslugedCity || "TLV - Herzliya area"}
        type="store"
        categoryProp="Grocery"
        titleProp="Top grocery picks (demo)"
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
        categoryProp="Sandwich"
        titleProp="Wallet friendly (demo)"
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

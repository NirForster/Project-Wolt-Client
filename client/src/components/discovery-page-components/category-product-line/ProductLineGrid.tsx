import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Restaurants",
    href: "/en/isr/tel-aviv/restaurants",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/restaurants_v2.png?w=200",
  },
  {
    name: "Groceries",
    href: "/en/isr/tel-aviv/browse/grocery",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/grocery.png?w=200",
  },
  {
    name: "Pharmacies",
    href: "/en/isr/tel-aviv/browse/pharmacy",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/pharmacy.png?w=200",
  },
  {
    name: "Alcohol",
    href: "/en/isr/tel-aviv/browse/alcohol",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/alcohol_v2.png?w=200",
  },
  {
    name: "Pet Supply",
    href: "/en/isr/tel-aviv/browse/pet_supply",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/pet_supply.png?w=200",
  },
  {
    name: "Health & Beauty",
    href: "/en/isr/tel-aviv/browse/health_and_beauty",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/health_and_beauty.png?w=200",
  },
  {
    name: "Electronics",
    href: "/en/isr/tel-aviv/browse/electronics",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/electronics.png?w=200",
  },
  {
    name: "Toys, Games & Kids",
    href: "/en/isr/tel-aviv/browse/toys_games_and_kids",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/robot.png?w=200",
  },
  {
    name: "Home & DIY",
    href: "/en/isr/tel-aviv/browse/home_and_diy",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/home_diy.png?w=200",
  },
  {
    name: "Flowers",
    href: "/en/isr/tel-aviv/browse/florist",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/florist.png?w=200",
  },
  {
    name: "Other Stores",
    href: "/en/isr/tel-aviv/browse/other_retail",
    img: "https://imageproxy.wolt.com/static-assets/product-line-navigation/v2/other_retail.png?w=200",
  },
];

const ProductLineGrid = () => {
  return (
    <div>
      <CategoryCard categories={categories} />
    </div>
  );
};

export default ProductLineGrid;

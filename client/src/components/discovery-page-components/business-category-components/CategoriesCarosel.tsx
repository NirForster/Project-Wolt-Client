import Carousel from "@/components/carosel-components/GenericCategoriesCarouselComponent";
import BusinessCategoryCard from "./BusinessCategoryCard";

interface Category {
  category: string;
  image: string;
  link: string;
}

interface CategoriesCarouselProps {
  categories: Category[];
  title: string;
}

const CategoriesCarosel: React.FC<CategoriesCarouselProps> = ({
  categories,
  title,
}) => {
  return (
    <div className="py-4">
      {categories.length > 0 && (
        <Carousel
          items={categories}
          title={title}
          renderItem={(category) => (
            <BusinessCategoryCard
              category={category.category}
              image={category.image}
              link={category.link}
              businessCount={Math.floor(Math.random() * 100)} // Mock count
            />
          )}
        />
      )}
    </div>
  );
};

export default CategoriesCarosel;

import React from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  title?: string;
  seeAllLink?: string;
}

const Carousel = <T,>({
  items,
  renderItem,
  title,
  seeAllLink,
}: CarouselProps<T>) => {
  return (
    <div className="carousel-container">
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          {seeAllLink && (
            <a href={seeAllLink} className="text-blue-500">
              See All
            </a>
          )}
        </div>
      )}
      <div className="flex overflow-x-auto space-x-4">
        {items.map((item, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

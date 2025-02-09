import { useRef } from "react";
import styles from "./GenericCarousel.module.css";

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
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === "left"
          ? -carouselRef.current.offsetWidth
          : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {title && (
        <div className={styles.header}>
          <h2 className="text-xl font-bold font-woltHeader">{title}</h2>
          <div className="flex flex-row items-center justify-center">
            <button
              type="button" // Specify the button type
              className={styles.arrow}
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
                width="16"
                height="16"
              >
                <path d="M22.533 10.526H5.422a.251.251 0 01-.165-.438l4.637-3.6a1.44 1.44 0 00-1.9-2.162L.813 10.165a2.4 2.4 0 000 3.6l7.179 5.837a1.44 1.44 0 001.9-2.161l-4.637-3.6a.251.251 0 01.165-.438h17.113a1.44 1.44 0 000-2.88v.003z"></path>
              </svg>
            </button>
            <button
              type="button" // Specify the button type
              className={styles.arrow}
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
                width="16"
                height="16"
              >
                <path d="M1.40206 10.5258H18.5131C18.6167 10.5248 18.709 10.4602 18.7455 10.3633C18.7821 10.2663 18.7553 10.1569 18.6781 10.0878L14.0411 6.48776C13.4767 5.95564 13.4352 5.0721 13.9472 4.48944C14.4593 3.90679 15.3408 3.83442 15.9411 4.32576L23.1221 10.1648C23.6387 10.6204 23.9346 11.276 23.9346 11.9648C23.9346 12.6536 23.6387 13.3092 23.1221 13.7648L15.9431 19.6018C15.3426 20.0868 14.4665 20.0121 13.9568 19.4324C13.4471 18.8527 13.4852 17.9742 14.0431 17.4408L18.6801 13.8408C18.7572 13.7717 18.7841 13.6622 18.7475 13.5653C18.711 13.4683 18.6187 13.4038 18.5151 13.4028H1.40206C0.621817 13.3822 0 12.7438 0 11.9633C0 11.1828 0.621817 10.5443 1.40206 10.5238V10.5258Z"></path>
              </svg>
            </button>
            {seeAllLink && (
              <a href={seeAllLink} className={styles.seeAllLink}>
                See All
              </a>
            )}
          </div>
        </div>
      )}
      <div className={styles.carouselWrapper}>
        <div ref={carouselRef} className={`${styles.carouselItems}`}>
          {items.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

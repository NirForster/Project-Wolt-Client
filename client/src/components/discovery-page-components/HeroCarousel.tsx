import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import new_stores from "@/assets/videos/check_out_new_stores_carosel_video.mp4";
import fashion from "@/assets/videos/fashion_carousel_video.mp4";
import new_restaurants from "@/assets/videos/new_restaurants_carousel_video.mp4";
import wolt_plus from "@/assets/videos/wolt+_carousle_video.mp4";

export function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Define Carousel Items
  const carouselItems = [
    {
      type: "video",
      contentUrl: new_stores,
      title: "",
      subtitle: "Check out the new stores >>",
      link: "/en/discovery/new-stores",
    },
    {
      type: "video",
      contentUrl: new_restaurants,
      title: "Meet the new eat 😉",
      subtitle: "Come check our new restaurants!",
      link: "/en/discovery/new-restaurants",
    },
    {
      type: "video",
      contentUrl: fashion,
      title: "Fashion in Wolt!",
      subtitle: "Now with a free returns service >>",
      link: "/en/discovery/fashion",
    },
    {
      type: "video",
      contentUrl: wolt_plus,
      title: "Wolt + 🤩 No Delivery fees!",
      subtitle: "Try it now, First month on us >>",
      link: "/en/wolt-plus",
    },
    {
      type: "image",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/89d33b78-39d8-11ef-bccd-8a08e3e70cdc_c4e7ca69_a39f_4684_8bde_c6c4addc6ca3.png",
      title: "Shopping for the weekend",
      subtitle: "Bakeries, Wine, Flowers, Deli & more.. 🛒",
      link: "/en/discovery/isr_g_flowers_shishi",
    },
  ];

  // Handle responsiveness
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Scroll Functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth / itemsToShow,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth / itemsToShow,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-full p-4">
      {/* Navigation Buttons */}
      <Button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </Button>
      <Button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </Button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-4"
        style={{
          scrollSnapType: "x mandatory",
          display: "grid",
          gridTemplateColumns: `repeat(${carouselItems.length}, minmax(${
            100 / itemsToShow
          }%, 1fr))`,
        }}
      >
        {carouselItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="relative block overflow-hidden rounded-lg shadow-lg w-full"
            style={{ scrollSnapAlign: "start" }}
          >
            {item.type === "video" ? (
              <video
                className="w-full min-h-[180px] max-h-[360px] object-cover"
                src={item.contentUrl}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="w-full min-h-[180px] max-h-[360px] object-cover"
                src={item.contentUrl}
                alt={item.title}
                loading="lazy"
              />
            )}
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              {/* Title */}
              <h2 className="text-lg font-bold mt-2">{item.title}</h2>
              {/* Subtitle */}
              <p className="text-sm text-gray-300">{item.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;

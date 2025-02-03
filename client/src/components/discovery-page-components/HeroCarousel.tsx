import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

import new_stores from "@/assets/videos/check_out_new_stores_carosel_video.mp4";
import fashion from "@/assets/videos/fashion_carousel_video.mp4";
import new_restaurants from "@/assets/videos/new_restaurants_carousel_video.mp4";
import wolt_plus from "@/assets/videos/wolt+_carousle_video.mp4";
import lunch_deals from "@/assets/videos/lunch_deals.mp4";

export function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Define Carousel Items
  const originalItems = [
    {
      type: "video",
      day: "all week",
      contentUrl: new_stores,
      title: "",
      subtitle: "Check out the new stores >>",
      link: "/en/discovery/new-stores",
    },
    {
      type: "video",
      day: "all week",
      contentUrl: new_restaurants,
      title: "Meet the new eat 😉",
      subtitle: "Come check our new restaurants!",
      link: "/en/discovery/new-restaurants",
    },
    {
      type: "video",
      day: "all week",
      contentUrl: fashion,
      title: "Fashion in Wolt!",
      subtitle: "Now with a free returns service >>",
      link: "/en/discovery/fashion",
    },
    {
      type: "video",
      day: "all week",
      contentUrl: wolt_plus,
      title: "Wolt + 🤩 No Delivery fees!",
      subtitle: "Try it now, First month on us >>",
      link: "/en/wolt-plus",
    },
    {
      type: "image",
      day: "all week",
      contentUrl:
        "https://imageproxy.wolt.com/venue/5c614ab8bec456000a3b2a4c/85d88ef0-e136-11ea-ad56-be6748cfdaf6_wolt_giftcard_6k_v01.png",
      title: "Gift Card",
      subtitle: "A present you MUST love",
      link: "/en/isr/tel-aviv/venue/woltilgiftcards",
    },
    {
      type: "image",
      day: "F",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/89d33b78-39d8-11ef-bccd-8a08e3e70cdc_c4e7ca69_a39f_4684_8bde_c6c4addc6ca3.png",
      title: "Shopping for the weekend",
      subtitle: "Bakeries, Wine, Flowers, Deli & more.. 🛒",
      link: "/en/discovery/isr_g_flowers_shishi",
    },
    {
      type: "image",
      day: "M",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/42bafeac-e170-11ef-ba02-a64f19e6b2c4_546674e6_3288_4dfc_ab92_7e737629399d.png?w=600",
      title: "Special Monday 😍",
      subtitle: "₪15 off at all restaurants & shops with code MONDEAL15",
      link: "/en/me/redeem-code",
    },
    {
      type: "image",
      day: "all week",
      time: "morning",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/993259ec-0a39-11ef-bb59-0ea050c22568_7fd53260_e380_43da_a09e_8116418fac41.jpg",
      title: "Good morning.. ☕️",
      subtitle: "Fresh bread & Pastries all the way to you >>",
      link: "/en/discovery/isr_g_bakery",
    },
    {
      type: "video",
      day: "all week",
      time: "afternoon",
      contentUrl: lunch_deals,
      title: "It’s a DEAL 💰",
      subtitle: "Discount for your lunch meal >>",
      link: "en/discovery/isr_deals_tlv",
    },
    {
      type: "image",
      day: "all week",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/076d7fe6-c749-11ef-8f7d-4659948a4881_8d8517f6_c6f9_4f52_8276_76be9814f514.jpg",
      title: "Super delivery!",
      subtitle: "Fresh & fast grocery delivery",
      link: "/en/discovery/wolt-market-all-26",
    },
    {
      type: "image",
      day: "all week",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/f5cd85d8-b889-11ef-aa54-72ffe9156115_46844750_5d9c_448c_84eb_f8f1d95e33b3.jpg",
      title: "Get 30₪ credits 💰",
      subtitle: "Share your code here",
      link: "/en/me/earn-credits",
    },
  ];

  const carouselItems = [...originalItems, ...originalItems];

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

  // Handle infinite scroll reset
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0; // Reset without transition
        } else if (scrollLeft <= 0) {
          carouselRef.current.scrollLeft = scrollWidth / 2 - clientWidth; // Jump to duplicated content
        }
      }
    };
    carouselRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      carouselRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Functions
  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: -carouselRef.current.offsetWidth / itemsToShow,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: carouselRef.current.offsetWidth / itemsToShow,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="relative w-full max-w-full p-4">
      {/* Navigation Buttons */}
      <Button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-BlueLightBackground w-[40px] h-[40px] px-0 py-0 rounded-full shadow-md z-10 text-woltColors-brandBg hover:bg-BlueBackgroundOnHover [&_svg]:!w-[20px] [&_svg]:!h-[20px]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
          width="20"
          height="20"
        >
          <path d="M22.533 10.526H5.422a.251.251 0 01-.165-.438l4.637-3.6a1.44 1.44 0 00-1.9-2.162L.813 10.165a2.4 2.4 0 000 3.6l7.179 5.837a1.44 1.44 0 001.9-2.161l-4.637-3.6a.251.251 0 01.165-.438h17.113a1.44 1.44 0 000-2.88v.003z"></path>
        </svg>
      </Button>
      <Button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-[40px] h-[40px] px-0 py-0 rounded-full shadow-md z-10 text-woltColors-brandBg hover:bg-BlueBackgroundOnHover [&_svg]:!w-[20px] [&_svg]:!h-[20px]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
          width="20"
          height="20"
        >
          <path d="M1.40206 10.5258H18.5131C18.6167 10.5248 18.709 10.4602 18.7455 10.3633C18.7821 10.2663 18.7553 10.1569 18.6781 10.0878L14.0411 6.48776C13.4767 5.95564 13.4352 5.0721 13.9472 4.48944C14.4593 3.90679 15.3408 3.83442 15.9411 4.32576L23.1221 10.1648C23.6387 10.6204 23.9346 11.276 23.9346 11.9648C23.9346 12.6536 23.6387 13.3092 23.1221 13.7648L15.9431 19.6018C15.3426 20.0868 14.4665 20.0121 13.9568 19.4324C13.4471 18.8527 13.4852 17.9742 14.0431 17.4408L18.6801 13.8408C18.7572 13.7717 18.7841 13.6622 18.7475 13.5653C18.711 13.4683 18.6187 13.4038 18.5151 13.4028H1.40206C0.621817 13.3822 0 12.7438 0 11.9633C0 11.1828 0.621817 10.5443 1.40206 10.5238V10.5258Z"></path>
        </svg>
      </Button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-hidden no-scrollbar whitespace-nowrap"
        style={{ display: "flex", transition: "transform 0.5s ease-in-out" }}
      >
        {originalItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="relative block overflow-hidden rounded-lg shadow-lg w-full min-w-[50%]"
          >
            {item.type === "video" ? (
              <video
                className="w-full min-h-[180px] max-h-[375px] object-cover"
                src={item.contentUrl}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="w-full min-h-[180px] max-h-[375px] object-cover"
                src={item.contentUrl}
                alt={item.title}
                loading="lazy"
              />
            )}
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white flex flex-col p-2">
              {/* Title */}
              <span className="text-[32px] font-bold font-woltHeader mt-2">
                {item.title}{" "}
              </span>
              <span className="text-lg text-gray-300 pt-3">
                {item.subtitle}
              </span>
              {/* Subtitle */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;

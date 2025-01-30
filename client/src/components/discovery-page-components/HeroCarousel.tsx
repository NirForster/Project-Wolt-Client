import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import new_stores from "@/assets/videos/check_out_new_stores_carosel_video.mp4";
import fashion from "@/assets/videos/fashion_carousel_video.mp4";
import new_restaurants from "@/assets/videos/new_restaurants_carousel_video.mp4";
import wolt_plus from "@/assets/videos/wolt+_carousle_video.mp4";

export function HeroCarousel() {
  // Data for the carousel items
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
    {
      type: "image",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/076d7fe6-c749-11ef-8f7d-4659948a4881_8d8517f6_c6f9_4f52_8276_76be9814f514.jpg",
      title: "Super delivery!",
      subtitle: "Fresh & fast grocery delivery",
      link: "/en/discovery/wolt-market-all-26",
    },
    {
      type: "image",
      contentUrl:
        "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/f5cd85d8-b889-11ef-aa54-72ffe9156115_46844750_5d9c_448c_84eb_f8f1d95e33b3.jpg",
      title: "Get 30₪ credits 💰",
      subtitle: "Share your code here",
      link: "/en/me/earn-credits",
    },
  ];

  return (
    <Carousel className="relative w-full max-w-full p-4">
      <CarouselContent className="flex gap-[14px]">
        {carouselItems.map((item, index) =>
          window.outerWidth <= 1024 ? (
            <CarouselItem
              key={index}
              className="flex-shrink-0 flex w-full sm:w-3/4 md:w-1/2"
            >
              <a
                href={item.link}
                className="relative block overflow-hidden rounded-lg shadow-lg"
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
            </CarouselItem>
          ) : (
            <>
              <CarouselItem
                key={index}
                className="flex-shrink-0 flex w-full sm:w-3/4 md:w-1/2"
              >
                <a
                  href={item.link}
                  className="relative block overflow-hidden rounded-lg shadow-lg"
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
              </CarouselItem>
              <CarouselItem
                key={index + 1}
                className="flex-shrink-0 flex w-full sm:w-3/4 md:w-1/2"
              >
                <a
                  href={item.link}
                  className="relative block overflow-hidden rounded-lg shadow-lg"
                >
                  {item.type === "video" ? (
                    <video
                      className="w-full h min-h-[180px] max-h-[360px] object-cover"
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
              </CarouselItem>
            </>
          )
        )}
      </CarouselContent>
      {/* Navigation buttons */}
      <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        &lt;
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        &gt;
      </CarouselNext>
    </Carousel>
  );
}

export default HeroCarousel;

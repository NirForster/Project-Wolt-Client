import React from "react";

interface RestaurantCardProps {
  name: string;
  description: string;
  photo: string;
  deliveryTime: string;
  deliveryFee: string;
  priceRange: String;
  rating: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  description,
  photo,
  deliveryTime,
  deliveryFee,
  priceRange,
  rating,
}) => {
  return (
    <div className="w-[260px] h-[220px]  ">
      <div className="relative z-0 ">
        <div className="transition-transform duration-300 ease-in-out aspect-[1/.46] w-full relative ">
          <div className="w-full h-full relative ">
            <div className="w-full h-full flex absolute overflow-hidden no-scrollbar rounded-t-[8px]">
              <div className="content-auto flex-[1_0_100%]">
                <a
                  href="#{link}"
                  className="inline text-[#009de0] leading-inherit cursor-pointer no-underline"
                >
                  <span className="block relative w-full h-full">
                    {/* Image */}
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full block absolute inset-0 object-cover"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="transform-none opacity-100 z-3 pointer-events-none flex flex-wrap absolute top-4 left-4 right-4"></div>
        </div>

        {/* Content */}
        <div className="p-2">
          {/* Tags */}
          <div className="whitespace-nowrap flex justify-between items-center gap-[var(--horizontal-padding)] py-[12px] px-[16px]">
            {/* Name and Category */}
            <div className="flex flex-col justify-center items-stretch min-w-0 gap-0.5">
              <h3 className="antialiased text-[1rem] font-sans text-normal font-medium font-semibold leading-[1.5rem] normal-case text-start overflow-hidden text-ellipsis text-[#202125] m-0">
                {name}
              </h3>
              <div className="antialiased text-start font-sans normal-case min-w-0 m-0 text-[0.875rem] font-normal leading-[1.25rem]">
                <p className=" text-woltColors-textSubdued overflow-hidden text-ellipsis ">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center absolute right-0">
              <div className="font-sans antialiased text-[0.875rem] font-normal bg-[#ebf7fd] text-[#009de0] leading-[1.25rem] rounded-lg flex flex-col justify-center items-center min-w-[60px] min-h-[40px] p-1 px-2">
                <div className=" font-sans antialiased text-[0.875rem] font-normal leading-[1.25rem] w-inherit text-ellipsis text-center text-inherit overflow-hidden">
                  {deliveryTime}
                </div>
                <div className="font-sans antialiased text-[0.875rem] font-normal leading-[1.25rem] w-inherit text-ellipsis text-center text-inherit overflow-hidden">
                  {" "}
                  min
                </div>
              </div>
            </div>
          </div>

          {/* Delivery rating and pricing Info */}
          <div className="flex items-center h-8 text-xs font-normal leading-4 font-sans text-woltColors-textSubdued border-t border-dashed border-woltColors-borderDefault ">
            <div className="flex whitespace-nowrap w-full">
              <span className="flex items-center gap-1 overflow-hidden">
                <svg
                  viewBox="0 0 24 24"
                  className="text-woltColors-textSubdued mr-1 w-[12px] min-w-[12px] h-[12px] min-h-[12px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.401 9.602c.281.281.666.439 1.062.439h.039a1.48 1.48 0 0 0 1.075-.496l3.157-3.507a1.505 1.505 0 0 0-.055-2.071L8.098 2.385A1.547 1.547 0 0 0 7 1.947c-.41.01-.802.191-1.076.495l-3.16 3.512a1.502 1.502 0 0 0 .054 2.066l1.583 1.582Zm6.321 2.132 1.451-1.659a8.276 8.276 0 0 0 4.655 1.42h.672a1.5 1.5 0 1 0 0-3h-.672a5.363 5.363 0 0 1-3.767-1.561 1.407 1.407 0 0 0-1.111-.438 1.5 1.5 0 0 0-1.079.511l-3.5 4a1.5 1.5 0 0 0 .3 2.236l.664.442a5.261 5.261 0 0 1 2.2 5.484 1.5 1.5 0 1 0 2.928.651 8.285 8.285 0 0 0-2.741-8.086ZM22 18.495a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-17 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm3.125-14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0Z"
                  ></path>
                </svg>
                <span className="truncate overflow-hidden">
                  {"₪" + deliveryFee + ".00"}
                </span>
                <span className="flex items-center gap-1 overflow-hidden">
                  •
                  <span className="truncate overflow-hidden">
                    <span>{priceRange}</span>
                    <span className="text-[#20212547]">{priceRange}</span>
                  </span>
                  •
                </span>
              </span>
              <span className="flex items-center gap-1 overflow-hidden">
                <svg
                  viewBox="0 0 24 24"
                  className="text-woltColors-textSubdued ml-1 w-[12px] min-w-[12px] h-[12px] min-h-[12px] overflow-visible"
                >
                  <path
                    d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0zm0 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.7 12.2c.4.3.6.8.3 1.3-1.2 1.9-2.8 3-5 3.1-2.2-.1-3.8-1-4.8-2.9-.2-.5-.2-.9.1-1.3.2-.3.6-.4 1-.3.4.1.5.4.7.7.7 1.3 1.9 1.9 3.3 1.7 1.2-.1 2-.7 2.8-1.6.1-.2.2-.4.4-.5.2-.4.7-.5 1.2-.2zM16 7c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9c-1 0-1.9-.8-1.9-1.9 0-1.1.8-1.9 1.9-1.9zM8 7c1 0 1.9.8 1.9 1.9s-.8 1.8-1.9 1.8c-1.1 0-1.9-.8-1.9-1.9C6.1 7.8 7 7 8 7z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>{rating.toFixed(1)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

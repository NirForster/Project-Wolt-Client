import { useState, useEffect } from "react";
import AppBarHomePage from "@/components/appBar/AppBarHomePage";

const quotes = [
  "Pre-order for tomorrow?",
  "Feeling Lazy?",
  "Craving Sushi?",
  "Something With Netflix Tonight?",
  "Long Day At Work?",
  "Pre-Order Lunch for the Office?",
  "You Deserve This.",
  "Hungry After the Gym?",
  "Friends Coming Over?",
  "Discover And Get Great Food.",
];

const HomePage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsFadingOut(false);
      }, 750); // fade out before changing the quote
    }, 4000); // before each change
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AppBarHomePage />
      <div className="flex justify-center items-end h-[640px] relative overflow-x-clip bg-[#cbe1ad]">
        <div className="flex justify-start items-end w-full max-w-[1200px] h-full relative">
          <div className="w-full h-full absolute top-0 overflow-y-clip">
            <img
              loading="eager"
              decoding="auto"
              // fetchPriority="high"
              sizes="(min-width: 1280px) 1200px, (min-width: 940px) calc(81.25vw + 176px), (min-width: 500px) calc(10.71vw + 821px), 800px"
              srcSet="https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/6_Saturday@0.5x.jpg 580w, https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/6_Saturday.jpg 1160w, https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/6_Saturday@2x.jpg 2320w"
              src="https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/6_Saturday.jpg"
              alt=""
              className="opacity-100 absolute top-0 z-0 object-cover w-auto min-w-[62.5rem] min-h-full transition-opacity duration-150 ease-in-out rtl:-right-[25%]"
            ></img>
          </div>
          <div className="absolute top-0 z-1 w-full h-full bg-[#2120254d] hidden"></div>
          <div className="flex flex-col justify-center w-[33.375rem] h-full mt-[3.4375rem] px-[30px] z-[11]">
            {/* Dynamic Quote Section */}
            <div className="h-[16.75rem] relative">
              <h1
                className={`antialiased text-[3.75rem] leading-[4.3125rem] font-bold font-woltHeader m-0 mb-6 absolute text-black bottom-0 transition-opacity duration-1000 ${
                  isFadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                {quotes[currentQuote]}
                <span className=" absolute w-[1px] h-[1px] m-[-1px] p-0 border-0 overflow-hidden whitespace-nowrap clip-rect clip-path-[inset(50%)]">
                  Pre-order lunch for the office?
                </span>
              </h1>
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <div className="">
                  <div className="bg-white rounded-lg w-full relative box-border">
                    <input
                      data-test-id="address-picker-input.input"
                      aria-autocomplete="both"
                      role="combobox"
                      aria-owns="suggestions"
                      aria-haspopup="listbox"
                      autoComplete="off"
                      id="front-page-input"
                      placeholder=" "
                      spellCheck="false"
                      className="w-full box-border rounded-md border-2 border-[#e4e4e5] bg-transparent text-[#202125] font-sans text-base font-normal leading-[1.5rem] tracking-normal appearance-none shadow-none p-[12px_14px] transition-all duration-200 ease-linear antialiased"
                      // value=""
                    />
                    <label
                      htmlFor="front-page-input"
                      className="absolute top-[14px] right-[52px] left-[52px] text-[#202125a3] font-sans text-base font-normal leading-[1.5rem] tracking-normal whitespace-nowrap text-ellipsis text-start pointer-events-none overflow-hidden transform-origin-0 transition-[transform,color] duration-150 ease-in-out antialiased"
                    >
                      Enter delivery address
                    </label>
                    <div className="absolute top-[14px] left-[16px] w-[24px] h-[24px] box-border pointer-events-none cursor-text">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        role="presentation"
                        aria-hidden="true"
                        width="24"
                        height="24"
                        className=""
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 9.5C6 12.813 8.687 15.5 12 15.5C15.312 15.497 17.997 12.813 18 9.5C18 6.187 15.313 3.5 12 3.5C8.687 3.5 6 6.187 6 9.5ZM2.5 9.5C2.506 4.256 6.756 0.006 12 0C17.244 0.006 21.493 4.255 21.5 9.499C21.5 16.044 14.958 21.987 12.958 23.653C12.402 24.114 11.597 24.114 11.041 23.653C9.037 21.987 2.5 16.044 2.5 9.5ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d1i08ytr flex flex-wrap gap-4 mt-4 mb-12">
              <button
                className="font-sans text-base font-medium leading-[1.5rem] underline tracking-normal antialiased text-black"
                data-font-family="default"
                data-prevent-text-wrap=""
                data-size="medium"
                data-variant="neutral"
                type="button"
              >
                <span
                  className="inline-block flex-shrink-0 m-0 me-[8px] leading-[0]"
                  data-position="start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    role="presentation"
                    width="16"
                    height="16"
                    className=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.333 7.333h-1.082a.333.333 0 0 1-.328-.28 6.011 6.011 0 0 0-4.976-4.976.333.333 0 0 1-.28-.328V.667a.667.667 0 0 0-1.334 0v1.082c0 .163-.119.302-.28.328a6.011 6.011 0 0 0-4.976 4.976.333.333 0 0 1-.328.28H.667a.667.667 0 0 0 0 1.334h1.082c.163 0 .302.119.328.28a6.011 6.011 0 0 0 4.976 4.976c.161.025.28.165.28.328v1.082a.667.667 0 1 0 1.334 0v-1.082c0-.163.119-.303.28-.328a6.012 6.012 0 0 0 4.976-4.976.333.333 0 0 1 .328-.28h1.082a.667.667 0 1 0 0-1.334ZM8 12.667a4.667 4.667 0 1 1 0-9.334 4.667 4.667 0 0 1 0 9.334Zm0-2a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"
                    ></path>
                  </svg>
                </span>
                Share location
              </button>
              <button
                className="inline-flex items-center text-black text-base font-medium leading-[1.5rem] font-sans tracking-normal whitespace-nowrap underline text-start rounded-sm cursor-pointer bg-transparent border-none p-0 shadow-none antialiased select-inherit"
                data-font-family="default"
                data-prevent-text-wrap=""
                data-size="medium"
                data-variant="neutral"
                type="button"
                // fdprocessedid="cua13e"
              >
                Log in for saved addresses
              </button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 mb-12 sm:hidden">
              <button
                className="inline-flex items-center text-[#202125] text-base font-medium leading-[1.5rem] font-sans tracking-normal whitespace-nowrap text-start rounded-sm cursor-pointer bg-transparent border-none p-0 shadow-none antialiased select-inherit "
                data-font-family="default"
                data-prevent-text-wrap=""
                data-size="medium"
                data-variant="neutral"
                type="button"
                // fdprocessedid="mg89k"
              >
                <span
                  className="cbc_TextButton_iconContainer_7cfd4"
                  data-position="start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    role="presentation"
                    width="16"
                    height="16"
                    className=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.333 7.333h-1.082a.333.333 0 0 1-.328-.28 6.011 6.011 0 0 0-4.976-4.976.333.333 0 0 1-.28-.328V.667a.667.667 0 0 0-1.334 0v1.082c0 .163-.119.302-.28.328a6.011 6.011 0 0 0-4.976 4.976.333.333 0 0 1-.328.28H.667a.667.667 0 0 0 0 1.334h1.082c.163 0 .302.119.328.28a6.011 6.011 0 0 0 4.976 4.976c.161.025.28.165.28.328v1.082a.667.667 0 1 0 1.334 0v-1.082c0-.163.119-.303.28-.328a6.012 6.012 0 0 0 4.976-4.976.333.333 0 0 1 .328-.28h1.082a.667.667 0 1 0 0-1.334ZM8 12.667a4.667 4.667 0 1 1 0-9.334 4.667 4.667 0 0 1 0 9.334Zm0-2a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"
                    ></path>
                  </svg>
                </span>
                Share location
              </button>
              <button
                className="s8f81r7 cbc_TextButton_rootCss_7cfd4"
                data-font-family="default"
                data-prevent-text-wrap=""
                data-size="medium"
                data-variant="neutral"
                type="button"
                // fdprocessedid="ndb7c"
              >
                Log in for saved addresses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

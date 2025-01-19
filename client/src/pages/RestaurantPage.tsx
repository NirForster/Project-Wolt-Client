import FoodItemCard from "@/components/FoodItemCard";
import { ItemViewCard } from "@/components/ItemViewCard";
import api from "@/services/api";

import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Error404Page from "./404Page";
import Business from "@/types/BusinessType";
import { Item, Menu, Section } from "@/types/MenuType";
import useSectionOnScreen from "@/hooks/useSectionOnScreen";
import { userContext } from "../providers/userContext";

function RestaurantPage() {
  const { user } = useContext(userContext);
  const shopID = useParams().id;
  console.log(user);
  const [business, setBusiness] = useState<{
    business: Business;
    menu: Menu;
  } | null>(null);
  const [itemModal, setItemModal] = useState<{
    item: Item;
    sectionTitle: string;
  } | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [isInFavorites, setIsInFavorites] = useState<boolean>(
    user
      ? user.favoritesShops.some((shop) => {
          return shop.toString() === shopID;
        })
      : false
  );

  let filteredMenu: Section[] = [];

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getFirstSectionTitle = () => {
    try {
      if (business?.menu) {
        if (business.menu.sections) {
          return business?.menu.sections.length
            ? business.menu.sections[0].sectionTitle
            : "";
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
    return "";
  };

  const firstSectionTitle = getFirstSectionTitle();

  const currentSectionTitle = useSectionOnScreen(
    { root: null, rootMargin: "0px", threshold: 1 },
    sectionRefs,
    firstSectionTitle
  );

  if (filter) {
    business?.menu.sections.forEach((section) => {
      const items: Item[] = [];
      section.items.forEach((item) => {
        if (item.name.includes(filter)) {
          items.push(item);
        }
      });
      if (items.length > 0) {
        filteredMenu.push({ ...section, items });
      }
    });
  } else if (business) {
    filteredMenu = business?.menu.sections;
  }

  function scrollToSection(index: number) {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function handleOnSearchChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setFilter(ev.target.value);
  }

  async function handleOnHeartClick() {
    const isCurrent = !isInFavorites;
    if (user) {
      const result = await api.put(
        `/favorites/${isCurrent ? "remove" : "add"}`,
        { shopID }
      );
      setIsInFavorites(isCurrent);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/shop/${shopID}`);
        setBusiness({ menu: data.menu, business: data.shop });
      } catch (err: any) {
        console.error(err.message);
      }
    };
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (business?.business && business.menu) {
    const dayIndex = new Date().getDay();
    const currentDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayIndex];
    const openingTimesOfToday = business.business.openingTimes.find((times) => {
      return times.day === currentDay;
    });
    let openTimeMsg: string = "Open Until ";
    if (openingTimesOfToday) {
      const workingTime = openingTimesOfToday.time;
      if (workingTime === "All day") {
        openTimeMsg = "Open all the day";
      } else {
        openTimeMsg = openTimeMsg.concat(workingTime.split("–")[1]);
      }
    } else {
      openTimeMsg = "Closed";
    }

    let ratingMsg = "";
    const businessRating = business.business.rating;
    if (businessRating > 7.5) {
      ratingMsg = `😊 ${businessRating.toFixed(1)}`;
    } else if (businessRating > 5) {
      ratingMsg = `😐 ${businessRating.toFixed(1)}`;
    } else {
      ratingMsg = `🙂‍↔️ ${businessRating.toFixed(1)}`;
    }
    return (
      <>
        <div className="w-full h-fit relative">
          <img
            src={business.business.coverImage}
            alt={`cover image for ${business.business.name}`}
            className="w-full z-0"
          />
          <div className="z-10 bg-[#00000075] absolute top-0 h-full left-0 w-full flex justify-between items-end p-10">
            <div className="flex flex-col text-white gap-8">
              <p className="text-[28px] sm:text-[46px] font-woltHeader">
                {business.business.name}
              </p>
              <p className="text-[16px] sm:text-[18px]">
                {business.business.description || ""}
              </p>
            </div>
            <div>
              <button
                className="bg-black p-5 rounded-full opacity-85"
                onClick={handleOnHeartClick}
              >
                <img
                  src={`/assets/photos/heart${
                    isInFavorites ? "" : "-fill"
                  }.png`}
                  alt={`${
                    isInFavorites ? "Remove from favorites" : "Add to favorites"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-fit p-4 flex flex-col sm:flex-row justify-between bg-white items-center">
          <div className="flex gap-4">
            <div className="flex gap-1">
              <img src="/assets/photos/clock.png" alt="clock" className="h-5" />
              <span>{openTimeMsg}</span>
            </div>
            <p>{ratingMsg}</p>
            <p>Service fee ₪2.00</p>
            <p className="cursor-pointer text-[#039de0]">More</p>
          </div>
          <div className="flex gap-2">
            <div className="flex bg-[#D6EFFA] text-[#009de0] p-2 rounded-lg cursor-pointer gap-1 w-fit whitespace-nowrap items-center">
              <img
                src="/assets/photos/calendar-badge-clock.png"
                alt="calender"
              />
              <span className="">Schedule order</span>
            </div>
            <div className="flex bg-[#D6EFFA] text-[#009de0] p-2 rounded-lg cursor-pointer gap-1 w-fit whitespace-nowrap items-center">
              <img
                src="/assets/photos/person-2-badge-plus-fill.png"
                alt="order together"
              />
              <span className="">Order together</span>
            </div>
          </div>
        </div>
        <hr />

        <div className="bg-[#fbfbfbf] ">
          <div
            className={`flex flex-col-reverse sm:flex-row sticky top-0 z-20 ${
              isSticky ? "bg-white" : "bg-[#fbfbfb]"
            }`}
          >
            <nav className={`flex overflow-x-auto justify-around items-center`}>
              {business.menu.sections.map((section, index) => {
                return (
                  <div
                    className={`p-2 sm:flex sm:items-center h-fit  ${
                      currentSectionTitle === section.sectionTitle
                        ? "bg-[#D6EFFA] text-[#27A3E2] rounded-[3rem]"
                        : ""
                    }`}
                    onClick={() => {
                      scrollToSection(index);
                    }}
                  >
                    <p
                      className={` whitespace-nowrap cursor-pointer hover:text-[#039de9] `}
                    >
                      {section.sectionTitle}
                    </p>
                  </div>
                );
              })}
            </nav>
            <form className="bg-[#DBDBDC] rounded-3xl w-[95%] sm:w-[280px] sm:max-w-[280px] sm:min-w-[280px] h-10 flex items-center m-4 p-2 ">
              <img
                src="/assets/photos/black-magnifyingglass.png"
                alt="search"
                className=""
              />
              <input
                placeholder={`Search in ${business.business.name}`}
                className="bg-[#DBDBDC] text-black flex-1"
                onChange={(ev) => handleOnSearchChange(ev)}
              />
              <button
                type="reset"
                onClick={() => {
                  setFilter("");
                }}
                className={`${filter === "" ? "hidden" : "cursor-pointer"} `}
              >
                <img
                  src="/assets/photos/x-circle-fill.png"
                  alt="x"
                  className=""
                />
              </button>
            </form>
          </div>

          {filter ? (
            <>
              <div className="w-full flex h-fit px-4 pt-4  bg-[#fbfbfb]">
                <p className="font-woltHeader text-2xl">
                  Results for "{filter}"
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="bg-white sm:bg-[#FBFBFB] grid sm:grid-cols-1 smd:grid-cols-2 xlg:grid-cols-3 items-stretch justify-stretch border-none px-2">
            {filteredMenu!.map((section, index) => {
              if (section.items.length === 0) {
                return <></>;
              }
              const sectionTitle = section.sectionTitle;

              return (
                <>
                  <div
                    className={`col-start-1 -col-end-1 pt-10 sm:pl-[10px] font-bold `}
                    key={sectionTitle}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    data-section-title={sectionTitle}
                  >
                    <span className={`text-[28px] font-woltHeader  `}>
                      {sectionTitle}
                    </span>
                  </div>

                  {section.items.map((item: Item, index: number) => {
                    return (
                      <button
                        onClick={() => {
                          setItemModal({ item, sectionTitle });
                        }}
                        className=" gap-y-6 gap-x-4 min-w-full  items-start justify-items-stretch cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                      >
                        <FoodItemCard item={item as Item} key={item._id} />
                        <hr
                          className={`${
                            index === section.items.length - 1 ? "hidden" : ""
                          } sm:hidden bg-woltColors-bgSurfaceSelected`}
                        />
                      </button>
                    );
                  })}
                </>
              );
            })}
          </div>
          {/* item modal start here */}
          <div
            onClick={(ev) => {
              setItemModal(null);
            }}
            className={`${
              itemModal ? "" : "hidden"
            }   h-[calc(100%-24px)] w-full fixed top-0 right-0  flex justify-center items-center bg-[#00000075] cursor-pointer`}
          >
            <div
              className="h-fit max-h-full w-full 2xs:m-6 2xs:max-w-[520px] bg-white relative rounded-[16px] overflow-y-auto cursor-default"
              onClick={(ev) => {
                ev.stopPropagation();
              }}
            >
              <ItemViewCard
                item={itemModal?.item as Item}
                setItemModal={setItemModal}
                shopID={business.business._id}
                menuID={business.menu._id}
                sectionTitle={itemModal?.sectionTitle || ""}
              />
              <img
                src="/assets/photos/x-img.png"
                className="absolute rounded-full w-10 h-10 top-4 right-4 cursor-pointer"
                onClick={() => {
                  setItemModal(null);
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Error404Page />;
  }
}

export default RestaurantPage;

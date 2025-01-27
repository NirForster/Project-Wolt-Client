import FoodItemCard from "@/components/FoodItemCard";

import api from "@/services/api/api";

import { useEffect, useRef, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Business, {
  BusinessAdditionalInfo,
  BusinessSummery,
} from "@/services/types/BusinessType";
import { Item, Menu, Section } from "@/services/types/MenuType";
import useSectionOnScreen from "@/hooks/useSectionOnScreen";
import LoginModel from "@/components/auth-components/Login/LoginModel";
import ItemViewCardCover from "@/components/business-page/single-item-modal/ItemViewCardCover";
import BusinessHeader from "@/components/business-page/BusinessHeader";
import MapGuyErr from "@/components/business-page/MapMan";
import SingleStorePage from "./SingleStorePage";
import SearchInBusinessForm from "@/components/SearchInBusinessForm";
import { userContext } from "../providers/userContext";
import Lottie from "lottie-react";

export default function RestaurantPage() {
  const { user } = useContext(userContext);
  const location = useLocation();
  const shopID = useParams().id;
  const [business, setBusiness] = useState<{
    summary: BusinessSummery;
    additionalInfo: BusinessAdditionalInfo;
    menu: Menu;
  } | null>(null);
  const [itemModal, setItemModal] = useState<{
    item: Item;
    sectionTitle: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
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
    { root: null, rootMargin: "-5% 0px -60% 0px", threshold: 0.4 },
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/shop/${shopID}`);
        setLoading(false);
        setBusiness({
          menu: data.menu,
          additionalInfo: data.shop.additionalInfo,
          summary: data.shop.summary,
        });
      } catch (err: any) {
        navigate("/404");
        console.error(err.message);
        navigate(`${location.pathname}/404`);
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

  if (loading) {
    return "Loading...";
  }

  // if (true) {
  //   return <SingleStorePage />;
  // }
  if (business?.additionalInfo && business?.summary && business?.menu) {
    return (
      <>
        <BusinessHeader
          business={{
            additionalInfo: business.additionalInfo,
            summary: business.summary,
          }}
          shopID={shopID as string}
        />

        <hr />

        <div className="bg-[#fbfbfbf] ">
          <div
            className={`flex flex-col-reverse sm:flex-row sm:justify-between sm:p-2 sticky top-16 z-20 ${
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
            <SearchInBusinessForm
              businessName={business.summary.name}
              filter={filter}
              handleOnSearchChange={handleOnSearchChange}
              setFilter={setFilter}
            />
          </div>

          {filter && filteredMenu.length ? (
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

          {filteredMenu.length ? (
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
                          <FoodItemCard
                            item={item as Item}
                            key={item._id}
                            isRestaurant={true}
                          />
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
          ) : (
            <MapGuyErr filter={filter} setFilter={setFilter} />
          )}
        </div>

        {/* modals start here */}
        {itemModal && (
          <ItemViewCardCover
            onClose={() => setItemModal(null)}
            item={itemModal.item}
            sectionTitle={itemModal.sectionTitle}
            shopID={shopID as string}
            menuID={business.menu._id}
          />
        )}
        {isLoginModalOpen && (
          <LoginModel onClose={() => setIsLoginModalOpen(false)} />
        )}
      </>
    );
  } else {
    navigate("/404");
  }
}

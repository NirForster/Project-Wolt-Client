import FoodItemCard from "@/components/FoodItemCard";

import api from "@/services/api/api";

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BusinessAdditionalInfo,
  BusinessSummery,
} from "@/services/types/BusinessType";
import { Item, Menu, Section } from "@/services/types/MenuType";
import LoginModel from "@/components/auth-components/Login/LoginModel";
import ItemViewCardCover from "@/components/business-page/single-item-modal/ItemViewCardCover";
import BusinessHeader from "@/components/business-page/BusinessHeader";
import MapGuyErr from "@/components/business-page/MapMan";
import SearchInBusinessForm from "@/components/SearchInBusinessForm";
import { useLocation } from "react-router-dom";

export default function SingleStorePage() {
  const location = useLocation();
  // alert(location.pathname);
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
  const [currentSection, setCurrentSection] = useState<Section>({
    sectionDescription: "",
    sectionTitle: "",
    _id: "string",
    items: [],
  });
  const [filter, setFilter] = useState<string>("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  let filteredMenu: Section[] = [];

  if (filter) {
    business?.menu.sections.map((section) => {
      const items: Item[] = [];
      section.items.map((item) => {
        if (item.name.includes(filter)) {
          items.push(item);
        }
      });
      if (items.length) {
        filteredMenu.push({ ...section, items });
      }
    });
  }

  function handleOnSearchChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setFilter(ev.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/shop/${shopID}`);
        setLoading(false);
        data.menu.sections = data.menu.sections.filter((section: Section) => {
          return section.items.length;
        });
        setBusiness({
          menu: data.menu,
          additionalInfo: data.shop.additionalInfo,
          summary: data.shop.summary,
        });
        setCurrentSection(data.menu.sections[0]);
      } catch (err: any) {
        navigate("/404");
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return "Loading...";
  }

  if (business?.additionalInfo && business?.summary && business?.menu) {
    const currentSectionIndex = business?.menu.sections.findIndex((section) => {
      return section.sectionTitle === currentSection.sectionTitle;
    });
    console.log(business.menu.sections);
    console.log(currentSectionIndex);

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

        <div className="bg-white sm:bg-[#fbfbfbf] sm:grid sm:grid-cols-[1fr_2fr] relative">
          {/* search and sections titles */}
          <div className="sticky top-0 sm:static w-full bg-white flex gap-2 flex flex-col">
            <SearchInBusinessForm
              businessName={business.summary.name}
              filter={filter}
              handleOnSearchChange={handleOnSearchChange}
              setFilter={setFilter}
            />
            {/* sections titles */}
            <div className="flex overflow-x-auto sm:flex-col sm:overflow-y-auto sm:gap-3 p-2">
              {business.menu.sections.map((section, index) => {
                return (
                  <div className="flex items-center gap-2">
                    <img
                      src={section.items[0].image}
                      className="rounded-full w-10 h-10 hidden sm:block"
                    />
                    <button
                      key={index}
                      className={`flex flex-col items-center justify-center ${
                        currentSection?.sectionTitle === section.sectionTitle
                          ? "text-[#039de0] border-b-2 border-[#039de0]"
                          : "hover:border-b-2 border-[#E4E4E5]"
                      } p-2 whitespace-nowrap`}
                      onClick={() => setCurrentSection(section)}
                    >
                      {section.sectionTitle}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          {/* main */}
          <div className="">
            {filter ? (
              filteredMenu.length ? (
                "filter menu"
              ) : (
                <MapGuyErr filter={filter} setFilter={setFilter} />
              )
            ) : (
              <div className="p-2 h-full flex flex-col justify-between">
                <div>
                  <p className="font-woltHeader text-[28px]">
                    {/* {currentSection.sectionTitle} */}
                    {filter ? (
                      filteredMenu.length ? (
                        "filteredMenu"
                      ) : (
                        "map guy"
                      )
                    ) : (
                      <p>{currentSection.sectionTitle}</p>
                    )}
                  </p>
                  {currentSection.items.map((item, index) => {
                    // console.log(item);
                    return (
                      <button
                        onClick={() => {
                          setItemModal({
                            item,
                            sectionTitle: currentSection.sectionTitle,
                          });
                        }}
                      >
                        <FoodItemCard
                          item={item}
                          key={index}
                          isRestaurant={false}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="flex relative w-full justify-between">
                  <div className={``}>
                    <div
                      className={`flex gap-2 ${
                        currentSectionIndex === 0
                          ? "hidden"
                          : "left-0 cursor-pointer items-center"
                      }`}
                      onClick={() =>
                        setCurrentSection(
                          business.menu.sections[currentSectionIndex - 1]
                        )
                      }
                    >
                      <img
                        src="/assets/photos/arrow-left.png"
                        alt=""
                        className="bg-[#D6EFFA] rounded-full p-2"
                      />
                      {currentSectionIndex - 1 >= 0 && (
                        <p>
                          {
                            business.menu.sections[currentSectionIndex - 1]
                              .sectionTitle
                          }
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={``}>
                    <div
                      className={`flex gap-2 ${
                        currentSectionIndex ===
                        business.menu.sections.length - 1
                          ? "hidden"
                          : "left-0 cursor-pointer items-center"
                      }`}
                      onClick={() =>
                        setCurrentSection(
                          business.menu.sections[currentSectionIndex + 1]
                        )
                      }
                    >
                      {currentSectionIndex + 1 <
                        business.menu.sections.length && (
                        <p>
                          {
                            business.menu.sections[currentSectionIndex + 1]
                              .sectionTitle
                          }
                        </p>
                      )}
                      <img
                        src="/assets/photos/arrow-right.png"
                        alt=""
                        className="bg-[#D6EFFA] rounded-full p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              // "current section"
            )}
          </div>
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
        {/* {isLoginModalOpen && (
          <LoginModel onClose={() => setIsLoginModalOpen(false)} />
        )} */}
      </>
    );
  } else {
    navigate("/403");
  }
}

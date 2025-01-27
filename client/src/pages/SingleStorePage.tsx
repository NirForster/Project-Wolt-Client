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

export default function SingleStorePage() {
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
          <div className="sticky top-0 sm:static w-full bg-white flex gap-2 flex flex-col">
            <SearchInBusinessForm
              businessName={business.summary.name}
              filter={filter}
              handleOnSearchChange={handleOnSearchChange}
              setFilter={setFilter}
            />
            <div className="flex overflow-x-auto sm:flex-col sm:overflow-y-auto">
              {business.menu.sections.map((section, index) => {
                return (
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
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-woltHeader text-[28px]">
              {/* {currentSection.sectionTitle} */}
              {filter
                ? filteredMenu.length
                  ? "filteredMenu"
                  : "map guy"
                : "currentSection.sectionTitle"}
            </p>
            {filter ? (
              filteredMenu.length ? (
                "filter menu"
              ) : (
                <MapGuyErr filter={filter} setFilter={setFilter} />
              )
            ) : (
              // currentSection.items.map((item) => {
              //   console.log(item);

              //   return <p>{item.name}</p>;
              // })
              <div className="">
                {currentSection.items.map((item, index) => {
                  console.log(item);

                  return (
                    <FoodItemCard
                      item={item}
                      key={index}
                      isRestaurant={false}
                    />
                  );
                })}
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
        {isLoginModalOpen && (
          <LoginModel onClose={() => setIsLoginModalOpen(false)} />
        )}
      </>
    );
  } else {
    navigate("/403");
  }
}

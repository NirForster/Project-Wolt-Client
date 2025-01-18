import FoodItemCard, { Item } from "@/components/FoodItemCard";
import { ItemViewCard } from "@/components/ItemViewCard";
import api from "@/services/api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404Page from "./404Page";

interface Business {
  address: {
    _id: string;
    id: string;
    name: string;
    zip: string;
  };
  businessDescription: string;
  deliveryFeeStructure: {
    _id: string;
    id: string;
    spanText: string;
    text: string;
  }[];
  deliveryTimes: TimeObj[];
  description: string;
  id: string;
  name: string;
  openingTimes: TimeObj[];
  phoneNumber: string;
  rating: number;
  reviews: [];
  type: string;
  website: string;
  __v: number;
  _id: string;
}

interface TimeObj {
  day:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  time: string;
  _id: string;
}

interface Menu {
  business: string;
  businessName: string;
  id: string;
  __b: number;
  _id: string;
  sections: {
    sectionDescription: string;
    sectionTitle: string;
    _id: string;
    items: {
      description: string;
      id: string;
      image: string;
      isPopular: boolean;
      name: string;
      price: string;
      _id: string;
      formData: {
        description: string;
        id: string;
        title: string;
        type: "radio" | "checkbox";
        options: {
          id: string;
          _id: string;
          optionLabel: string;
          optionPrice: string;
        }[];
      }[];
    }[];
  }[];
}

function RestaurantPage() {
  const [business, setBusiness] = useState<{
    business: Business;
    menu: Menu;
  } | null>(null);
  const [itemModal, setItemModal] = useState<{
    item: Item;
    sectionTitle: string;
  } | null>(null);
  const shopID = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/shop/${shopID}`);

        setBusiness({ menu: data.menu, business: data.shop });
      } catch (err: any) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  if (business?.business && business.menu) {
    console.log(business);

    return (
      <>
        <div className="bg-white sm:bg-[#FBFBFB] grid sm:grid-cols-1 smd:grid-cols-2 xlg:grid-cols-3 items-stretch justify-stretch">
          {business.menu.sections.map((section: any) => {
            const sectionTitle = section.sectionTitle;
            return (
              <>
                <div
                  className="col-start-1 -col-end-1 pt-10 sm:pl-[10px]"
                  key={sectionTitle}
                >
                  <span className="text-[28px] font-woltHeader  ">
                    {sectionTitle}
                  </span>
                </div>

                {section.items.map((item: any, index: number) => {
                  return (
                    <button
                      onClick={() => {
                        setItemModal({ item, sectionTitle });
                      }}
                      className=" gap-y-6 gap-x-4 min-w-full  items-start justify-items-stretch cursor-pointer"
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
          }   h-[calc(100%-24px)] w-full fixed top-0 right-0  flex justify-center items-center bg-[#00000075]`}
        >
          <div
            className="h-fit max-h-full w-full 2xs:m-6 2xs:max-w-[520px] bg-white relative rounded-[16px] overflow-y-auto"
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
      </>
    );
  } else {
    return <Error404Page />;
  }
}

export default RestaurantPage;

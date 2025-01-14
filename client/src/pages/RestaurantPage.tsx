import FoodItemCard, { Item } from "@/components/FoodItemCard";
import { ItemViewCard } from "@/components/ItemViewCard";
import api from "@/services/api";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

interface Shop {
  avgDeliveryTime: number;
  categories: string[];
  deliveryFee: number;
  description: string;
  id: string;
  locations: {
    branchName: string;
    address: string;
    _id: string;
    id: string;
  }[];
  menu: Item[];
  name: string;
  phone: string;
  photo: string;
  rate: number;
  reviews: any[];
  tags: string[];
  workingTime: {
    closing: string;
    opening: string;
    day:
      | "Sunday"
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday";
    id: string;
    _id: string;
  }[];
  __V: number;
  _id: string;
}

function RestaurantPage() {
  const [restaurant, setRestaurant] = useState<Shop | null>(null);
  const [itemModal, setItemModal] = useState<Item | null>(null);
  const shopID = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/shop/new`
        );
        console.log(data);
        console.log("bababababababababa");

        setRestaurant(data.shop);
      } catch (err: any) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);
  console.log(itemModal);

  if (restaurant) {
    const categories: { [key: string]: Item[] } = {};
    restaurant.menu.forEach((item) => {
      const currentItem = item as Item;
      const currentCategory = currentItem.category;
      if (categories[currentCategory]) {
        categories[currentCategory].push(currentItem as Item);
      } else {
        categories[currentCategory] = [currentItem as Item];
      }
    });
    const categoriesKeys = Object.keys(categories);

    return (
      <>
        <div className="bg-white sm:bg-[#FBFBFB] grid sm:grid-cols-1 smd:grid-cols-2 xlg:grid-cols-3 items-stretch justify-stretch">
          {categoriesKeys.map((category) => {
            return (
              <>
                <div
                  className="col-start-1 -col-end-1 pt-10 sm:pl-[10px]"
                  key={category}
                >
                  <span className="text-[28px] font-woltHeader  ">
                    {category}
                  </span>
                </div>

                {categories[category].map((item, index) => {
                  return (
                    <button
                      onClick={() => {
                        setItemModal(item);
                      }}
                      className=" gap-y-6 gap-x-4 min-w-full  items-start justify-items-stretch cursor-pointer"
                    >
                      <FoodItemCard item={item as Item} key={item._id} />
                      <hr
                        className={`${
                          index === categories[category].length - 1
                            ? "hidden"
                            : ""
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
            className=" h-fit w-full 2xs:m-6 2xs:max-w-[520px] bg-white relative rounded-[16px]"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          >
            <ItemViewCard item={itemModal as Item} />
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
  }
}

export default RestaurantPage;

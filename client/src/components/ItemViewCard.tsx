import { useContext, useRef } from "react";
import { Item } from "./FoodItemCard";
import UpdateItemQuantity from "./UpdateItemQuantity";

interface ItemViewCardProps {
  item: Item;
}

export function ItemViewCard({ item }: ItemViewCardProps) {
  if (!item) {
    return <></>;
  }

  return (
    <div className="rounded-[16px]">
      <img
        src={item.photo}
        className="max-h-[292.5px] w-full rounded-t-[16px]"
      />

      <div className="p-3">
        <div className="flex flex-col gap-4 ">
          <p className="font-woltHeader text-3xl">{item.foodName}</p>
          <p className="text-BlueBackgroundAndText">{item.currentPrice}₪</p>
          <p>{item.description}</p>
          <hr />
        </div>
        <UpdateItemQuantity price={item.currentPrice} />
      </div>
    </div>
  );
}

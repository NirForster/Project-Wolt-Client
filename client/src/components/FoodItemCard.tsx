import { Item } from "@/types/menu";

interface foodItemCardPropsType {
  item: Item;
  isRestaurant: boolean;
}

export default function FoodItemCard({
  item,
  isRestaurant,
}: foodItemCardPropsType) {
  if (item) {
    // console.log(item);

    return (
      <>
        <div
          className={`h-[140px] grid ${
            isRestaurant
              ? "grid grid-cols-[1fr_174px]"
              : "flex flex-col-reverse"
          } py-3 sm:px-3 rounded-[0.5rem] m-2 bg-white sm:border sm:border-[#2021251f] bg-clip-border border-separate`}
        >
          {/* Text Section */}
          <div
            className={`flex flex-col justify-around text-start pr-4 overflow-hidden `}
          >
            <div className="items-start overflow-y-hidden">
              <p className="text-woltColors-textDefault truncate">
                {item.name}
              </p>
              <p className="text-[#717173] break-words ">
                {item.description || ""}
              </p>
            </div>
            <div>
              <p className="text-BlueBackgroundAndText">{item.price}</p>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative h-[116px] w-[174px] `}>
            <img
              src={item.image}
              alt={`A picture of ${item.name}`}
              className="h-full w-full object-cover rounded-lg"
            />
            <img
              src="/assets/photos/plus.png"
              className="absolute top-0 right-0 h-[46px] w-11 rounded-tr-lg rounded-bl-lg"
            />
          </div>
        </div>
      </>
    );
  } else {
    console.log("missing");
  }
}

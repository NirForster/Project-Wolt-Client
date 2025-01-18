import { useState } from "react";

interface UpdateItemQuantityProps {
  totalPrice: number;
  setFormResponse: any;
}

export default function UpdateItemQuantity({
  totalPrice,
  setFormResponse,
}: UpdateItemQuantityProps) {
  const [quantity, setQuantity] = useState(1);
  totalPrice *= quantity;

  function handleUpdating(update: number) {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev + update);
      setFormResponse({
        quantity: newQuantity,
        finalPrice: totalPrice * newQuantity,
      });
      return newQuantity;
    });
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_2fr]  mt-4 gap-2">
        <div className="bg-[#EAF7FC] h-14 w-[160px] rounded-lg flex justify-around items-center">
          <div className="w-6 h-6  cursor-pointer">
            <img
              src={`/assets/photos/minus.png`}
              className={` ${quantity === 1 ? "rounded-full" : "hidden"}`}
            />
            <img
              src={`/assets/photos/minus-white.png`}
              className={` ${quantity === 1 ? "hidden" : "rounded-full"}`}
              onClick={() => {
                handleUpdating(-1);
              }}
            />
          </div>

          <span className="text-woltColors-brandBg ">{quantity}</span>
          <img
            src={`/assets/photos/plus-white.png`}
            className={`w-6 h-6 rounded-full cursor-pointer`}
            onClick={() => {
              handleUpdating(1);
            }}
            alt="baba"
          />
        </div>
        <button
          type="submit"
          className="bg-woltColors-brandBg hover:bg-[#1FA9E4] rounded-lg flex justify-around items-center text-white text-[16px] font-bold"
        >
          <span>Add to order</span>
          <span>{totalPrice}₪</span>
        </button>
      </div>
    </>
  );
}

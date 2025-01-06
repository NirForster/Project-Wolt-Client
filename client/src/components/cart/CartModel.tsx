import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartTabs from "./CartTabs";
import { FaShoppingCart } from "react-icons/fa";

const CartModel = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="relative">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaShoppingCart size={16} />
            </button>
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-black rounded-full">
              3
            </span>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[400px] sm:w-[540px] ">
          <SheetHeader>
            <SheetTitle className="text-right">ההזמנות שלך</SheetTitle>
            <SheetDescription className="overflow-y-auto max-h-screen">
              <CartTabs />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartModel;

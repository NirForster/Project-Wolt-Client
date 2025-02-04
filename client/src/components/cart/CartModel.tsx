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
import { userContext } from "../../providers/userContext";
import { useContext, useEffect, useState } from "react";

const CartModel = () => {
  const { user } = useContext(userContext);
  if (!user) {
    return "an error, no user detected";
  }
  const [itemsInCart, setItemsInCart] = useState(user.cart.length);

  // useEffect(() => {
  //   console.log("My name is baba: what yours?");
  //   console.log(user.cart.length);
  //   setItemsInCart(user.cart.length);
  // }, [user.cart]);

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="relative">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaShoppingCart size={16} />
            </button>
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-black rounded-full">
              {/* {user?.cart.length || 1} */}
              {/* {user ? user.cart.length : 1} */}
              {itemsInCart}
            </span>
          </div>
        </SheetTrigger>
        <SheetContent side={"right"} className="w-[400px] sm:w-[540px] ">
          <SheetHeader>
            <SheetTitle className="text-[32px] font-woltHeader">
              Your orders
            </SheetTitle>
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

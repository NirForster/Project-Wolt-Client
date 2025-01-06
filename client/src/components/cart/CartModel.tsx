import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartTabs from "./CartTabs";

const CartModel = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
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

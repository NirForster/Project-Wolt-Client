import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SavedOrder from "./SavedOrder";

const CartTabs = () => {
  return (
    <div>
      <Tabs defaultValue="savedOrder" className="w-full ">
        <TabsList className="flex">
          <TabsTrigger className="flex-1" value="reorder">
            הזמנה חוזרת
          </TabsTrigger>
          <TabsTrigger value="savedOrder" className="flex-1 ">
            הזמנות שמורות
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reorder"></TabsContent>
        <TabsContent value="savedOrder">
          <div className="overflow-y-auto max-h-full">
            <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            />
            <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            />
            {/* <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            />
            <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            />
            <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            />
            <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            /> */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CartTabs;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SavedOrder from "./SavedOrder";

const CartTabs = () => {
  return (
    <div>
      <Tabs defaultValue="savedOrder" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="reorder">הזמנה חוזרת</TabsTrigger>
          <TabsTrigger value="savedOrder">הזמנות שמורות</TabsTrigger>
        </TabsList>
        <TabsContent value="reorder">
          <div className="w-[250px]">
            <SavedOrder
              restaurantName="מקדונלד'ס קניון אורות הכשר"
              ShippingMessage="אוי, אנחנו לא מגיעים למיקום שלך"
              totalPrice="₪108.00"
            />
          </div>
        </TabsContent>
        <TabsContent value="savedOrder">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default CartTabs;

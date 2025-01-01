import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CartTabs = () => {
  return (
    <div>
      <Tabs defaultValue="savedOrder" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="reorder">הזמנה חוזרת</TabsTrigger>
          <TabsTrigger value="savedOrder">הזמנות שמורות</TabsTrigger>
        </TabsList>
        <TabsContent value="reorder">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="savedOrder">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default CartTabs;

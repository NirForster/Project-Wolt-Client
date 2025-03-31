import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SavedOrder from "./SavedOrder";
import { useEffect, useState } from "react";
import getUserCart from "@/services/api/users/getUserCart";

interface CartTabsProps {
  onClose: () => void;
}

const CartTabs = ({ onClose }: CartTabsProps) => {
  const [userCart, setUserCart] = useState<any>(null); // State for the cart
  const [error, setError] = useState<string | null>(null);

  // Fetch the user's cart on component load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getUserCart(); // Await the resolved promise
        setUserCart(cartData); // Set the resolved data to state
      } catch (error) {
        setError("Failed to load cart. Please try again later.");
      }
    };

    fetchCart();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userCart) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="spinner"></div> {/* Add your spinner here */}
      </div>
    );
  }

  return (
    <div>
      <Tabs defaultValue="savedOrder" className="w-full">
        <TabsList className="flex">
          <TabsTrigger className="flex-1" value="reorder">
            הזמנה חוזרת
          </TabsTrigger>
          <TabsTrigger value="savedOrder" className="flex-1">
            הזמנות שמורות
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reorder"></TabsContent>

        <TabsContent value="savedOrder">
          <div className="overflow-y-auto max-h-full">
            {/* Button for debugging */}
            {/* <button
              onClick={() => {
                console.log(userCart.cart); // Log the cart items
              }}
            >
              Log Cart
            </button> */}

            {/* Render saved orders dynamically */}
            {userCart.cart.map((item: any) => {
              return (
                <SavedOrder
                  key={item.id}
                  restaurantID={item.shop.id}
                  restaurantName={item.shop.summary.name || "No Name"} // Make sure it's a string
                  ShippingMessage="נהדר, אנחנו מגיעים למיקום שלך"
                  totalPrice={item.totalPrice ? `₪${item.totalPrice}` : "₪0.00"} // Ensure it's a string or number
                  coverImage={item.shop.summary.image}
                  items={item.items}
                  onClose={onClose}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CartTabs;

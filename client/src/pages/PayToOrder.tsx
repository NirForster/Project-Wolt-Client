import AddCreditCard from "@/components/AddCreditCard";
import { userContext } from "@/providers/userContext";
import getUserCart from "@/services/api/users/getUserCart";
import sendOrder from "@/services/api/users/sendOrder";
import { Order } from "@/types";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface PayToOrderProps {}
export default function PayToOrder({}: PayToOrderProps) {
  const { user, updateUser } = useContext(userContext);
  const { city, id, orderIdx } = useParams();
  const navigate = useNavigate();
  const [deliveryState, setDeliveryState] = useState<"Delivery" | "Pickup">(
    "Delivery"
  );
  const [deliveryTip, setDeliveryTip] = useState<number>(0);
  const [paymentName, setPaymentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (!user || !orderIdx) {
    alert("An error occurred. Probably you are not logged in.");
    navigate(`en/isr/${city}/restaurant/${id}`);
  }

  const currentOrder = user!.cart[+orderIdx!];
  console.log(currentOrder);

  const prices = [{ message: "סכום ההזמנה", price: currentOrder.totalPrice }];
  if (deliveryState === "Delivery") {
    prices.push(
      { message: "דמי תפעול", price: 3.35 },
      { message: "משלוח", price: 10.0 }
    );
  }
  if (deliveryTip > 0) {
    prices.push({ message: "טיפ לשליח", price: deliveryTip });
  }
  const totalOrderPrice = prices.reduce((acc, price) => acc + price.price, 0);
  prices.push({ message: "סה״כ", price: totalOrderPrice });

  const handleOrdering = async () => {
    if (paymentName) {
      await sendOrder(currentOrder._id as string);
      const cart = await getUserCart();
      if (cart) {
        await updateUser({
          ...user,
          cart:
            (cart.cart as Order[]).filter(
              (order: Order) => order._id !== currentOrder._id
            ) || [],
        });
        alert("ההזמנה בוצעה בהצלחה");
        navigate(`/en/isr/${encodeURIComponent(city || "")}/restaurant/${id}`);
      } else {
        alert("something went wrong");
      }
    } else {
      alert("You must choose a payment first!");
    }
  };

  return (
    <div className="flex justify-between w-[100%] relative">
      {/* left div */}
      <div className="flex flex-col sticky top-20 border border-gray-600 rounded-xl p-4 shadow-lg flex-1 h-fit text-right">
        <span className="font-bold text-xl">Summary</span>
        <span>{`כולל מיסים (אם רלוונטי)`}</span>
        <br />
        {prices.map((price, index) => (
          <div
            key={index}
            className={`flex justify-between ${
              prices.length - 1 === index ? "font-bold" : ""
            }`}
          >
            <span>₪ {price.price}</span>
            <span>{price.message}</span>
          </div>
        ))}
        <br />

        <button
          className="bg-[#039de0] rounded-lg"
          onClick={() => handleOrdering()}
        >
          לחצו להזמנה
        </button>
      </div>

      {/* right div */}
      <div className="flex flex-col gap-4 w-fit p-4 flex-1">
        {/* delivery type div */}
        <div className="w-full ">
          <button
            onClick={() => setDeliveryState("Delivery")}
            className={`${deliveryState === "Delivery" ? "bg-green-300" : ""}`}
          >
            Delivery
          </button>
          <button
            onClick={() => setDeliveryState("Pickup")}
            className={`${deliveryState === "Pickup" ? "bg-green-300" : ""}`}
          >
            Pick up
          </button>
        </div>

        {/* payment div */}
        <div className="flex flex-col gap-4 text-right">
          <span className="font-bold">Payment</span>
          {paymentName ? (
            <div className="border flex flex-row-reverse text-right justify-between items-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                role="presentation"
                className="wExTLH"
              >
                <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2zm14 5h-16v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-14 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></path>
              </svg>
              <div className="flex flex-col">
                <span className="text-[#039de0]">{paymentName}</span>
                <span>החיוב יבוצע מאמצעי התשלום שנבחר</span>
              </div>
              <span> </span>
            </div>
          ) : (
            <button
              className="border flex flex-row-reverse text-right justify-between items-center"
              onClick={() => setIsOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                role="presentation"
                className="wExTLH"
              >
                <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2zm14 5h-16v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-14 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></path>
              </svg>
              <span>לחץ כאן בכדי להוסיף כרטיס אשראי</span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                role="presentation"
                className="y7u1IR al-Icon-rtlflp-894"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="M8.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l7.293-7.293-7.293-7.293a1 1 0 0 1 0-1.414"></path>
              </svg>
            </button>
          )}
        </div>

        {/* delivery tip */}
        {deliveryState === "Delivery" && (
          <div className="flex flex-col gap-4 w-full">
            <span className="font-bold text-right">טיפ לשליח</span>
            <div className="border rounded flex flex-col p-2 gap-2">
              <div className="flex justify-between gap-6">
                <span className="whitespace-nowrap flex-1">
                  ₪ {deliveryTip}
                </span>
                <span className="text-right text-wrap">
                  השליח יראה את הטיפ כשעה לאחר המשלוח, ויקבל את הסכום ישירות
                  אליו לאחר ניכוי מע״מ
                </span>
              </div>
              <div className="flex justify-around">
                {[0, 5, 10, 15, 20].map((tip) => {
                  return (
                    <button
                      onClick={() => setDeliveryTip(tip)}
                      className={`border py-1 px-6 rounded-xl ${
                        deliveryTip === tip ? "border-[#039de0]" : ""
                      }`}
                      key={tip}
                    >
                      ₪ {tip}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* coupon code div */}
        <div className="flex flex-col gap-4">
          <span className="font-bold text-right">קוד קופון</span>
          <div className="flex flex-col gap-2">
            <span className="text-right">
              אם יש לך קוד קופון, זה המקום להקליד אותו והקרדיט יתווסף מיד לחשבון
            </span>
            <div className="flex gap-2">
              <button
                className="bg-[#039de0] flex-1 rounded py-2 px-4"
                onClick={() => {
                  alert("קוד קופון לא תקין");
                }}
              >
                שליחה
              </button>
              <input
                placeholder="קוד קופון"
                className="border border-black rounded-lg flex-[2] text-right px-2"
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="w-full h-full z-50 absolute top-0 ">
          <AddCreditCard
            onClose={(cardName: string) => {
              setIsOpen(false);
              setPaymentName(cardName);
            }}
          />
        </div>
      )}
    </div>
  );
}

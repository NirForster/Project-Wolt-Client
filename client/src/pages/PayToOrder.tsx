import AddCreditCard from "@/components/AddCreditCard";
import { userContext } from "@/providers/userContext";
import getUserCart from "@/services/api/users/getUserCart";
import sendOrder from "@/services/api/users/sendOrder";
import { Order, OrderItem } from "@/types";
import { useContext, useState, useRef, useEffect } from "react";
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
  const rightDivRef = useRef<HTMLDivElement | null>(null);
  const [maxRightWidth, setMaxRightWidth] = useState(0);

  useEffect(() => {
    const width = rightDivRef.current?.offsetWidth || 0;
    if (width > maxRightWidth) {
      setMaxRightWidth(width);
    }
  }, [deliveryState]); // re-check when Delivery/Pickup toggles
  const selectedDeliveryTypeClasses = "bg-white p-2 rounded-3xl";

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
    if (deliveryTip > 0) {
      prices.push({ message: "טיפ לשליח", price: deliveryTip });
    }
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
      <div
        className={`flex flex-col sticky top-20   rounded-xl p-4 shadow-lg flex-1 h-fit text-right`}
        style={{
          boxShadow:
            "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
          minWidth: maxRightWidth / 2,
        }}
      >
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
      <div
        ref={rightDivRef}
        className="flex flex-col gap-4 w-fit p-4 flex-2"
        style={{ minWidth: maxRightWidth }}
      >
        {/* delivery type div */}
        <div className="w-full flex justify-around bg-[#EDEDEE] rounded-3xl  border-[#EDEDEE] border-[4px]">
          <button
            onClick={() => setDeliveryState("Delivery")}
            className={`${
              deliveryState === "Delivery" ? selectedDeliveryTypeClasses : ""
            } flex flex-row flex-1 justify-center items-center ${
              deliveryState === "Pickup" ? "text-[#6B6B6D]" : "text-black"
            } hover:text-black font-bold`}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="20"
              fill="currentColor"
              role="presentation"
              aria-hidden="true"
              className="al-Icon-rtlflp-894 al-Icon-upscloptclcrrctn-894"
            >
              <path d="M18 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"></path>
              <path d="M11.293 7.793a1 1 0 0 1 1.262-.125l.338.227c.587.395.924.622 1.386.79.525.191 1.264.315 2.721.315a1 1 0 1 1 0 2c-1.543 0-2.554-.126-3.404-.435a6 6 0 0 1-.697-.31c-.44.632-1.092 1.32-1.748 1.764a7.78 7.78 0 0 1 1.849 4.981v1a1 1 0 0 1-2 0v-1c0-1.695-.837-3.401-2.068-4.344-.67-.514-.898-1.604-.179-2.324zM16 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.616 4.47a1.25 1.25 0 0 1 1.768 0l.896.896a1.25 1.25 0 0 1 0 1.768l-2.896 2.896a1.25 1.25 0 0 1-1.768 0l-.896-.896a1.25 1.25 0 0 1 0-1.768z"></path>
            </svg>
            <span>Delivery</span>
          </button>
          <button
            onClick={() => setDeliveryState("Pickup")}
            className={`${
              deliveryState === "Pickup" ? selectedDeliveryTypeClasses : ""
            } flex flex-row flex-1 justify-center items-center ${
              deliveryState === "Delivery" ? "text-[#6B6B6D]" : "text-black"
            } hover:text-black font-bold`}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="20"
              fill="currentColor"
              role="presentation"
              aria-hidden="true"
              className="al-Icon-rtlflp-894 al-Icon-upscloptclcrrctn-894"
            >
              <path d="M14.5 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12.596 14.11l.073-.37c.104-.527.228-1.147.31-1.534.18-.861.331-2.003.42-2.754.108-.896-.144-1.794-.88-2.284-.132-.088-.364-.144-.645-.171a1 1 0 0 0-.092-.01 6 6 0 0 0-.664 0 3 3 0 0 0-.188.016c-1.712.157-2.916 1.076-3.689 2.196-.86 1.249-1.197 2.745-1.242 3.767a1 1 0 1 0 1.998.088c.033-.741.291-1.85.89-2.72a3.14 3.14 0 0 1 1.066-.994l-.445 3.536c-.073.585.15 1.164.548 1.597v-.005q.045.046.097.087c2.153 1.715 3.615 4.789 4.47 6.879a1 1 0 1 0 1.851-.758c-.713-1.743-1.965-4.499-3.878-6.566M14.393 9.57a4.1 4.1 0 0 0-.016-1.108l.659.66a3 3 0 0 0 2.121.878h.843a1 1 0 0 1 0 2h-.843a5 5 0 0 1-2.959-.97c.08-.537.147-1.058.195-1.46"></path>
              <path d="m9.562 15.394-.163.57a5 5 0 0 1-1.012 1.881l-2.146 2.504a1 1 0 0 0 1.518 1.302l2.147-2.504a7 7 0 0 0 1.221-2.05c-.308-.4-.65-.791-1.041-1.183l-.335-.332z"></path>
            </svg>
            <span>Pick up</span>
          </button>
        </div>

        {/* Order items div */}
        <div className="flex flex-col gap-4 text-right items-end">
          {currentOrder.items.map((item) => {
            const currentItem = item as OrderItem;
            return (
              <div className="flex justify-between w-full flex-row-reverse">
                <div className="flex flex-row-reverse gap-4">
                  <img
                    src={currentItem.item.image}
                    alt={`${currentItem.item.name}'s photo`}
                    className="h-10 w-[71.11] rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold">{currentItem.item.name}</span>
                    {currentItem.extras.map((currentExtra) => {
                      return (
                        <span className="text-[#717173]">{currentExtra}</span>
                      );
                    })}
                    <span className="text-[#039de0]">
                      ₪ {currentItem.totalPrice || 50}{" "}
                    </span>
                  </div>
                </div>
                <div className="flex border-[2px] border-[#E4E4E5] rounded-xl justify-center items-center h-10 w-10 ">
                  <span>{currentItem.quantity}</span>
                </div>
              </div>
            );
          })}
          <button
            onClick={() =>
              navigate(
                `/en/isr/${encodeURIComponent(city || "")}/restaurant/${id}`
              )
            }
          >
            להוסיף עוד מנות +
          </button>
        </div>

        {/* Order items div */}
        <div className="flex flex-col gap-4 text-right">
          <span className="font-bold">Order items</span>
          {currentOrder.items.map((currentItem) => {
            const castedCurrentItem = currentItem as OrderItem;
            return (
              <div className="flex justify-between flex-row-reverse">
                <img
                  src={castedCurrentItem.item.image}
                  className="w-24 h-14 rounded"
                  alt={`${castedCurrentItem.item.name}'s photo`}
                />
                <div className="flex flex-col">
                  <span className="font-bold">
                    {castedCurrentItem.item.name}
                  </span>
                  {castedCurrentItem.extras.map((currentExtra) => {
                    return (
                      <span className="text-gray-500">1 * {currentExtra}</span>
                    );
                  })}

                  <span className="text-[#039de0]">
                    {castedCurrentItem.totalPrice} ₪
                  </span>
                </div>

                <div></div>
              </div>
            );
          })}
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
                      className={`border-2 py-1 px-6 rounded-xl hover:bg-[#EAF7FC] ${
                        deliveryTip === tip
                          ? "border-[#039de0]"
                          : " hover:border-[#039de0] border-[#E4E4E5]"
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

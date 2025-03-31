import { userContext } from "@/providers/userContext";
import sendOrder from "@/services/api/users/sendOrder";
import { Business, Order } from "@/types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SheetClose } from "../ui/sheet";

interface SavedOrderProps {
  restaurantID: string;
  restaurantName: string;
  ShippingMessage: string;
  totalPrice: string;
  coverImage: string;
  items: string[];
  onClose: () => void;
}

const SavedOrder: React.FC<SavedOrderProps> = ({
  restaurantID,
  restaurantName,
  ShippingMessage,
  totalPrice,
  coverImage,
  items,
  onClose,
}) => {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(userContext);
  const { city } = useParams();

  const handleSendOrder = () => {
    if (user) {
      console.log("hello baba");
      console.log(user.cart);
      const orderIdx = user.cart.findIndex((order: Order) => {
        return (
          (order.shop as Business)._id.toString() === restaurantID.toString()
        );
      });
      // const orderIdx = 0;
      onClose();
      navigate(
        `/en/isr/${encodeURIComponent(
          city || ""
        )}/restaurant/${restaurantID}/checkout/${orderIdx}`
      );
    } else {
      alert("An error occurred. Probably you are not logged in.");
    }
    // if (user) {
    //   const order = user.cart.find(
    //     (order: Order) => order.shop === restaurantID
    //   )?._id;
    //   console.log(order);
    // }

    // navigate(`/en/discovery/tlv-herzliya-area`);
  };
  return (
    <div className="line-height w-full max-w-md mb-2 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-end mb-4">
        {/* <button
          aria-label="Delete order"
          className="text-gray-400 hover:text-red-600"
        ></button> */}
        <div className="flex items-center">
          <div className="mr-2 text-right">
            <h2 className="font-sans font-bold text-black">{restaurantName}</h2>
            <p className=" text-gray-500">{ShippingMessage}</p>
          </div>
          <img
            src={coverImage}
            alt="McDonald's Logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <div className="h-full max-h-10 flex justify-end">
        {items.map((item) => {
          return (
            <div className="h-full mr-1" key={item.item.id}>
              <img
                src={item.item.image}
                alt={item.item.name}
                className="h-10 w-auto object-contain" // Set image height to 40px, maintain aspect ratio
              />
            </div>
          );
        })}
      </div>

      {/* Order Details */}
      <div className="flex items-center justify-end mb-4">
        <div className="text-right flex">
          <p className=" font-bold text-gray-800">{totalPrice}</p>
          <span className="font-medium">:סכום ביניים של פריט</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between gap-3">
        <button
          type="button"
          onClick={() => handleSendOrder()}
          className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          מעבר לתשלום
        </button>
        <button
          // onClick={() => navigate(`/restaurant/${restaurantID}`)}
          onClick={() =>
            navigate(
              `/en/isr/tlv-herzliya-area/restaurant/678d776c7790e17f96248fec`
            )
          }
          className="flex-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"
        >
          להוסיף עוד פריטים
        </button>
      </div>
    </div>
  );
};

export default SavedOrder;

import mcLogo from "../../assets/dummyData/mcdonaldsIMG.avif";

interface SavedOrderProps {
  restaurantName: string;
  ShippingMessage: string;
  totalPrice: string;
}

const SavedOrder: React.FC<SavedOrderProps> = ({
  restaurantName,
  ShippingMessage,
  totalPrice,
}) => {
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
            src={mcLogo}
            alt="McDonald's Logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
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
        <button className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          מעבר לתשלום
        </button>
        <button className="flex-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100">
          להוסיף עוד פריטים
        </button>
      </div>
    </div>
  );
};

export default SavedOrder;

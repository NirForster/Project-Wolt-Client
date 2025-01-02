import mcLogo from "../../../public/dummyData/mcdonaldsIMG.avif";

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
    <div className="w-full max-w-md p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <button
          aria-label="Delete order"
          className="text-gray-400 hover:text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <h2 className="text-sm font-bold">{restaurantName}</h2>
            <p className="text-sm text-gray-500">{ShippingMessage}</p>
          </div>
          <img
            src={mcLogo}
            alt="McDonald's Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>

      {/* Order Details */}
      <div className="flex items-center justify-end mb-4">
        <div className="text-right flex">
          <p className="text-sm font-bold text-gray-800">{totalPrice}</p>
          <span className="text-sm font-medium">:סכום ביניים של פריט</span>
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

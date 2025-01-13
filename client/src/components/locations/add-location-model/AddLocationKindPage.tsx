import { FaBuilding, FaHome, FaMapMarkerAlt } from "react-icons/fa";

const AddLocationKindPage = ({
  setKind,
}: {
  setKind: (kind: string) => void;
}) => {
  const locationsKindsArray = ["House", "Apartment", "Office", "Other"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-[400px] w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold font-woltHeader">Where?</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            // onClick={onClose}
          >
            ✕
          </button>
        </div>
        {/* Address List */}
        <ul className="divide-y divide-gray-300">
          {locationsKindsArray.map((kind, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-4" // Add padding for better spacing
            >
              <div className="flex items-center space-x-3">
                <div className="text-blue-500">{getIconByType(kind)}</div>
                <div>
                  <p className={`font-semibold text-sm`}>{kind}</p>
                </div>
              </div>

              {/* Render button conditionally */}

              <button
                className="text-blue-600 bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 text-sm"
                onClick={() => setKind(kind)}
              >
                Choose
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddLocationKindPage;

// Utility function to get the icon by type
const getIconByType = (type: string) => {
  switch (type) {
    case "Apartment":
      return <FaBuilding />;
    case "House":
      return <FaHome />;
    case "Office":
      return <FaHome />;
    default:
      return <FaMapMarkerAlt />;
  }
};

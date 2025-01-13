import { useContext, useState } from "react";
import { FaHome, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { userContext } from "../../providers/userContext";
import AddNewLocationModal from "./add-location-model/AddLocationModal";

const LocationsList = ({ onClose }: { onClose: () => void }) => {
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] = useState(false);
  const { user } = useContext(userContext); // Access user context

  // Update in the app bar ths user address and icon
  const loggedInUserLocationList = user?.locations;

  // State for the current selected address
  const [currentAddress, setCurrentAddress] = useState<string | null>(
    loggedInUserLocationList[0].address
  );

  const handleChooseAddress = (address: string) => {
    setCurrentAddress(address); // Update the selected address
    onClose;
  };

  const backFromAddLocationModal = () => {
    setIsAddLocationModalOpen(false);
  };

  return isAddLocationModalOpen ? (
    <AddNewLocationModal onBack={backFromAddLocationModal} onClose={onClose} />
  ) : (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-[400px] w-full p-6">
        {/* Header */}
        <div className="flex justify-end items-center ">
          <button
            className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <h2 className="text-3xl font-bold font-woltHeader">Where?</h2>

        {/* Address List */}
        <ul className="divide-y divide-gray-300">
          {loggedInUserLocationList && loggedInUserLocationList.length > 0 ? (
            loggedInUserLocationList.map((address, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-4" // Add padding for better spacing
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">
                    {getIconByType(address.type)}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        currentAddress === address.address
                          ? "text-blue-600"
                          : ""
                      }`}
                    >
                      {address.type}
                    </p>
                    <p
                      className={`text-sm ${
                        currentAddress === address.address
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      {address.address}
                    </p>
                  </div>
                </div>

                {/* Render button conditionally */}
                {currentAddress !== address.address && (
                  <button
                    className="text-blue-600 bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 text-sm"
                    onClick={() => handleChooseAddress(address.address)}
                  >
                    Choose
                  </button>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-sm">
              There are no addresses in the user's list.
            </p>
          )}
        </ul>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button
            className="flex items-center text-blue-600 hover:underline w-full"
            onClick={() => setIsAddLocationModalOpen(true)}
          >
            <span className="text-lg mr-2">+</span>
            Add new address
          </button>
          <button className="flex items-center text-blue-600 hover:underline w-full">
            <span className="text-lg mr-2">☰</span>
            Browse all Wolt cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationsList;

// Utility function to get the icon by type
const getIconByType = (type: string) => {
  switch (type) {
    case "Work":
      return <FaBuilding />;
    case "Home":
      return <FaHome />;
    default:
      return <FaMapMarkerAlt />;
  }
};

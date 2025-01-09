import React, { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const AddressList = ({ onClose }: { onClose: () => void }) => {
  const addresses = [
    { type: "Work", address: "Hahilazon Street" },
    { type: "Home", address: "נחלת בנימין 42" },
    { type: "Other", address: "31 בלפור" },
    { type: "Other", address: "79 הצבי" },
  ];

  // State for the current selected address
  const [currentAddress, setCurrentAddress] = useState<string | null>(
    addresses[0].address
  );

  const handleChooseAddress = (address: string) => {
    setCurrentAddress(address); // Update the selected address
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-[400px] w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold font-woltHeader">Where?</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Address List */}
        <ul className="space-y-4">
          {addresses.map((address, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="text-blue-500">
                  {getIconByType(address.type)}
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      currentAddress === address.address ? "text-blue-600" : ""
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
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button className="flex items-center text-blue-600 hover:underline w-full">
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

export default AddressList;

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

import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";

const AddressTypeSelector = ({
  label,
  setLocationLabel,
}: {
  label: string;
  setLocationLabel: (label: string) => void;
}) => {
  // const [selectedType, setSelectedType] = useState("Home"); // Default selected type

  const addressTypes = [
    { id: "Home", label: "Home", icon: <FaHouse /> },
    { id: "Work", label: "Work", icon: <FaBriefcase /> },
    { id: "Other", label: "Other", icon: <ImLocation2 /> },
  ];

  return (
    <div className="flex space-x-4">
      {addressTypes.map((type) => (
        <div
          key={type.id}
          className={`flex flex-col items-center justify-center p-4 w-full h-24 rounded-lg border cursor-pointer transition 
          ${
            label === type.id
              ? "bg-blue-100 border-blue-500"
              : "bg-white border-gray-300 hover:border-blue-500"
          }`}
          onClick={() => setLocationLabel(type.id)}
        >
          <div
            className={`text-2xl ${
              label === type.id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {type.icon}
          </div>
          <p
            className={`mt-2 font-medium ${
              label === type.id ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {type.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AddressTypeSelector;

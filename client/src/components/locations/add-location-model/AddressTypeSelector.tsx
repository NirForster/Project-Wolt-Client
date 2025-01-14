import { FaBriefcase } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { IconType } from "react-icons/lib";

const AddressTypeSelector = ({
  label,
  setLocationLabel,
}: {
  label: "Home" | "Work" | "Other";
  setLocationLabel: (label: "Home" | "Work" | "Other") => void;
}) => {
  const addressTypes: { label: "Home" | "Work" | "Other"; icon: any }[] = [
    { label: "Home", icon: <FaHouse /> },
    { label: "Work", icon: <FaBriefcase /> },
    { label: "Other", icon: <ImLocation2 /> },
  ];

  return (
    <div className="flex space-x-4">
      {addressTypes.map((type) => (
        <div
          key={type.label}
          className={`flex flex-col items-center justify-center p-4 w-full h-24 rounded-lg border cursor-pointer transition 
          ${
            label === type.label
              ? "bg-blue-100 border-blue-500"
              : "bg-white border-gray-300 hover:border-blue-500"
          }`}
          onClick={() => setLocationLabel(type.label)}
        >
          <div
            className={`text-2xl ${
              label === type.label ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {type.icon}
          </div>
          <p
            className={`mt-2 font-medium ${
              label === type.label ? "text-blue-600" : "text-gray-700"
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

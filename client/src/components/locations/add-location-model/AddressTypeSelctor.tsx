import { useState } from "react";

const AddressTypeSelector = () => {
  const [selectedType, setSelectedType] = useState("Home"); // Default selected type

  const addressTypes = [
    { id: "Home", label: "Home", icon: "🏠" },
    { id: "Work", label: "Work", icon: "💼" },
    { id: "Other", label: "Other", icon: "📍" },
  ];

  return (
    <div className="flex space-x-4">
      {addressTypes.map((type) => (
        <div
          key={type.id}
          className={`flex flex-col items-center justify-center p-4 w-32 h-24 rounded-lg border cursor-pointer transition 
          ${
            selectedType === type.id
              ? "bg-blue-100 border-blue-500"
              : "bg-white border-gray-300 hover:border-blue-500"
          }`}
          onClick={() => setSelectedType(type.id)}
        >
          <div
            className={`text-2xl ${
              selectedType === type.id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {type.icon}
          </div>
          <p
            className={`mt-2 font-medium ${
              selectedType === type.id ? "text-blue-600" : "text-gray-700"
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

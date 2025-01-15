import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import AddressTypeSelector from "./AddressTypeSelector";
import { Details } from "@/types";

const AddLocationDetailsPage = ({
  street,
  kind,
  onBack,
  onClose,
  setDetails,
}: {
  street: string;
  kind: string;
  onBack: (kind: string) => void;
  onClose: () => void;
  setDetails: (allDetails: Details) => void;
}) => {
  const [selectedType, setSelectedType] = useState(`${kind}`);
  const [entrance, setEntrance] = useState("");
  const [numberOnDoor, setNumberOnDoor] = useState("");
  const [locationLabel, setLocationLabel] = useState("Home");
  const isSaveDisabled = numberOnDoor.trim() === "";

  const handleSave = () => {
    const allDetails = {
      kind: selectedType,
      entrance: entrance,
      numberOnDoor: numberOnDoor,
      locationLabel: locationLabel,
    };
    setDetails(allDetails);
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-lg shadow-lg max-w-[500px] w-full p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={() => onBack("")}
            >
              ←
            </button>

            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <h2 className="text-3xl font-bold font-woltHeader mb-2">
            Address details
          </h2>
          <p className="text-gray-400">
            Giving exact address details helps us deliver your order faster.
          </p>
          <p className="text-black font-woltHeader text-lg">address</p>
          <p className="text-gray-400">{street}</p>

          {/* Form */}
          <div>
            <div className="mt-4 mb-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue>{selectedType}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input
              type="text"
              placeholder="Entrance / Staircase"
              onChange={(e) => setEntrance(e.target.value)}
              className="h-[40px] mt-4 "
            />
            <p className="text-gray-400 ml-2">Optional</p>
            <Input
              type="text"
              placeholder="Name / Number on door"
              onChange={(e) => setNumberOnDoor(e.target.value)}
              required
              className="h-[40px] mt-4 mb-4"
            />
            <Input
              type="text"
              placeholder="Other instructions for the courier"
              onChange={(e) => setEntrance(e.target.value)}
              className="h-[40px] mt-4 "
            />
            <p className="text-gray-400 ml-2 mb-4">Optional</p>

            <AddressTypeSelector
              label={locationLabel}
              setLocationLabel={setLocationLabel}
            />

            <button
              disabled={isSaveDisabled}
              className={`w-full mt-4 px-4 py-2 rounded-lg text-white text-center ${
                isSaveDisabled
                  ? "bg-blue-200 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLocationDetailsPage;

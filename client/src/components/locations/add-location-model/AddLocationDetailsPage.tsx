import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import AddressTypeSelector from "./AddressTypeSelctor";

const AddLocationDetailsPage = ({
  street,
  kind,
  onBack,
  onClose,
}: {
  street: string;
  kind: string;
  onBack: (kind: string) => void;
  onClose: () => void;
}) => {
  const [selectedType, setSelectedType] = useState(`${kind}`);
  const [entrance, setEntrance] = useState("");
  const [numberOnDoor, setnumberOnDoor] = useState("");

  // const handleContinue = () => {
  //   setStreet(streetInput);
  // };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-lg shadow-lg max-w-[400px] w-full p-6">
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
          <div className="space-y-4">
            <div>
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
              className="h-[40px] "
            />
            <p className="text-gray-400">Optional</p>
            <Input
              type="text"
              placeholder="Name / Number on door"
              onChange={(e) => setnumberOnDoor(e.target.value)}
              required
              className="h-[40px] "
            />
            <Input
              type="text"
              placeholder="Other instructions for the courier"
              onChange={(e) => setEntrance(e.target.value)}
              className="h-[40px] "
            />
            <p className="text-gray-400">Optional</p>

            <AddressTypeSelector />

            {/* <button
              disabled={isContinueDisabled}
              className={`w-full px-4 py-2 rounded-lg text-white text-center ${
                isContinueDisabled
                  ? "bg-blue-200 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              // onClick={() => handleContinue()}
            >
              Continue
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLocationDetailsPage;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { BiTargetLock } from "react-icons/bi";
import addLocationImage from "@/assets/addLocationImage.png";

const AddLocationStreetPage = ({
  onBack,
  onClose,
  setStreet,
}: {
  onBack: () => void;
  onClose: () => void;
  setStreet: (street: string) => void;
}) => {
  const [streetInput, setStreetInput] = useState("");
  const isContinueDisabled = streetInput.trim() === "";

  const handleContinue = () => {
    setStreet(streetInput);
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-lg shadow-lg max-w-[500px] w-full p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={onBack}
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
            Add new address
          </h2>
          {/* Form */}
          <div className="space-y-4">
            <div>
              {/* <label className="text-sm font-medium">Country</label> */}
              <Input value="Israel" disabled className="h-[54px] mb-2" />
            </div>

            <div className="relative">
              <Input
                id="Street"
                type="text"
                value={streetInput}
                placeholder="Street name and number"
                onChange={(e) => setStreetInput(e.target.value)}
                required
                className="h-[54px] mb-2"
              />

              <button
                className="absolute top-[17px] right-2 text-blue-500 hover:text-blue-700"
                onClick={() => alert("Locate address on map")}
              >
                <BiTargetLock size={24} />
              </button>
            </div>
            <button
              disabled={isContinueDisabled}
              className={`w-full px-4 py-2 rounded-lg text-white text-center ${
                isContinueDisabled
                  ? "bg-blue-200 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => handleContinue()}
            >
              Continue
            </button>
          </div>

          {/* Image */}
          <div className="mt-6">
            <img src={addLocationImage} alt="Illustration" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLocationStreetPage;

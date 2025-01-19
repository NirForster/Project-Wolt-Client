import { Input } from "@/components/ui/input";
import { useContext, useState, useEffect } from "react";
import { userContext } from "@/providers/userContext";
import editUser from "@/api/users/editUser";
import PhoneAnimation from "./settingsAnimations/PhoneAnimation";

const EditUserPhoneModel = ({ onClose }: { onClose: () => void }) => {
  const { user, updateUser } = useContext(userContext);

  const [canSave, setCanSave] = useState(true);
  const [newPhoneValue, setNewPhoneValue] = useState(user?.phone);

  useEffect(() => {
    setCanSave(newPhoneValue === user?.phone || !newPhoneValue);
  }, [newPhoneValue, user?.phone]);

  const handleSave = async () => {
    if (!newPhoneValue || newPhoneValue === user?.phone) return;

    try {
      // Call the API to update the phone
      await editUser(undefined, undefined, undefined, newPhoneValue);

      // Update the phone in the context
      updateUser({ phone: newPhoneValue });

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Failed to update phone:", error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-lg shadow-lg max-w-[500px] w-full p-6">
          <div className="flex justify-end items-center mb-4">
            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <PhoneAnimation />
          <div>
            <p className="font-woltHeader text-2xl">Phone</p>
            <Input
              type="number"
              value={newPhoneValue}
              // onChange={(e) => setNewPhoneValue(e.target.value)}
              className="h-[40px] mt-4"
            />
            <div className="flex gap-4 mt-4">
              <div
                onClick={onClose}
                className="flex-grow hover:cursor-pointer rounded-lg gap-2 flex items-center justify-center h-[54px] bg-blue-100 text-BlueBackgroundAndText hover:bg-blue-200"
              >
                <p className="text-[16px]">Cancel</p>
              </div>
              <button
                disabled={canSave}
                className={`flex-grow h-[54px] rounded-lg text-white text-[16px] text-center ${
                  canSave
                    ? "bg-woltColors-brandDisabled cursor-not-allowed"
                    : "bg-woltColors-brandSelected hover:bg-woltColors-brandHover"
                }`}
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserPhoneModel;

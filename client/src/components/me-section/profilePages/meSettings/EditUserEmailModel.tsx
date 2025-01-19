import { Input } from "@/components/ui/input";
import EmailAnimation from "./EmailAnimation";
import { useContext, useState, useEffect } from "react";
import { userContext } from "@/providers/userContext";
import editUser from "@/api/users/editUser";

const EditUserEmailModel = ({ onClose }: { onClose: () => void }) => {
  const { user, updateUser } = useContext(userContext);

  const [canSave, setCanSave] = useState(true);
  const [newEmailValue, setNewEmailValue] = useState(user?.email);

  useEffect(() => {
    setCanSave(newEmailValue === user?.email || !newEmailValue);
  }, [newEmailValue, user?.email]);

  const handleSave = async () => {
    if (!newEmailValue || newEmailValue === user?.email) return;

    try {
      await editUser(newEmailValue); // Call API to update email
      updateUser({ email: newEmailValue }); // Update email in context
      onClose(); // Close modal
    } catch (error) {
      console.error("Failed to update email:", error);
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
          <EmailAnimation />
          <div>
            <p className="font-woltHeader text-2xl">Email</p>
            <Input
              type="text"
              value={newEmailValue}
              onChange={(e) => setNewEmailValue(e.target.value)}
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

export default EditUserEmailModel;

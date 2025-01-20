import { useContext, useState } from "react";
import { userContext } from "@/providers/userContext";
import deleteUser from "@/services/api/users/deleteUser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DeleteAnimation from "./settingsAnimations/DeleteAnimation";

const EditUserDeleteModel = ({ onClose }: { onClose: () => void }) => {
  const { user } = useContext(userContext);
  const [canDelete, setCanDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteUser(); // Call API to delete user
      onClose(); // Close modal after deletion
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-lg shadow-lg max-w-[500px] w-full p-6">
          {/* Close button */}
          <div className="flex justify-end items-center mb-4">
            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          <DeleteAnimation />

          <div>
            <p className="font-woltHeader text-2xl">Delete Account</p>
            <p className="text-[16px] mt-5">
              {user?.fname}, we're really sorry to see you go 😢 Are you sure
              you want to delete your account?
            </p>
            {/* Dropdown with selection */}
            <Select
              onValueChange={(value) => {
                if (value) setCanDelete(true); // Enable delete if a value is selected
              }}
            >
              <SelectTrigger className="w-full mt-6">
                <SelectValue placeholder="Choose an reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">I don`t use Wolt anymore</SelectItem>
                <SelectItem value="2">I`m not happy with Wolt</SelectItem>
                <SelectItem value="3">Wolt is too expensive</SelectItem>
                <SelectItem value="4">Something else</SelectItem>
                <SelectItem value="5">No reason</SelectItem>
              </SelectContent>
            </Select>

            {/* Action buttons */}
            <div className="flex gap-4 mt-4">
              {/* Cancel button */}
              <div
                onClick={onClose}
                className="flex-grow hover:cursor-pointer rounded-lg flex items-center justify-center h-[54px] bg-blue-100 text-BlueBackgroundAndText hover:bg-blue-200"
              >
                <p className="text-[16px]">Cancel</p>
              </div>

              {/* Save/Delete button */}
              <button
                disabled={!canDelete} // Button enabled only if canDelete is true
                className={`flex-grow h-[54px] rounded-lg text-red-500 text-[16px] text-center ${
                  canDelete
                    ? "bg-red-50 hover:bg-red-100"
                    : "bg-red-50 text-red-300 cursor-not-allowed"
                }`}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserDeleteModel;

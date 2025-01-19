import React, { useContext, useState } from "react";
import EditUserEmailModel from "./EditUserEmailModel";
import EditUserNameModel from "./EditUserNameModel";
import { userContext } from "@/providers/userContext";
import EditUserPhoneModel from "./EditUserPhoneModel";

interface ProfileSettingsProps {}

const MeProfileSettings: React.FC<ProfileSettingsProps> = () => {
  const [isEditUserModelOpen, setIsEditUserModelOpen] = useState(false);
  const [whichEditUserModel, setWhichEditUserModel] =
    useState<JSX.Element | null>(null);

  let { user } = useContext(userContext);

  const onClose = () => {
    console.log(user?.email);
    setIsEditUserModelOpen(false);
  };

  const handleOpenEditUserModel = (label: string) => {
    setIsEditUserModelOpen(true);
    switch (label) {
      case "email":
        setWhichEditUserModel(<EditUserEmailModel onClose={onClose} />);
        break;
      case "name":
        setWhichEditUserModel(<EditUserNameModel />);
        break;
      case "phone":
        setWhichEditUserModel(<EditUserPhoneModel onClose={onClose} />);
        break;

      default:
        break;
    }
  };

  return isEditUserModelOpen ? (
    whichEditUserModel
  ) : (
    <div className="mt-16 mx-auto px-6 py-4">
      {/* Country Selector */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <label className="block text-[16px] mb-2">Country</label>
          <p className="text-[16px] text-gray-500 mt-2">
            The selected country determines the currency of your referral code
          </p>
        </div>
        <select className="w-[200px] h-14 p-3 border border-gray-300 rounded-lg">
          <option>Israel</option>
        </select>
      </div>

      {/* Account Info */}
      <div className="divide-y divide-gray-200 border-t border-b border-gray-300">
        {/* Email */}
        <div className="flex justify-between items-center py-6 text-[16px]">
          <span className="text-gray-700">Email</span>
          <span
            className="text-woltColors-brandPressed hover:cursor-pointer"
            onClick={() => handleOpenEditUserModel("email")}
          >
            {user?.email}
          </span>
        </div>
        {/* Mobile Number */}
        <div className="flex justify-between items-center py-6 text-[16px]">
          <span className="text-gray-700">Mobile number</span>
          <span
            className="text-woltColors-brandPressed hover:cursor-pointer"
            onClick={() => handleOpenEditUserModel("phone")}
          >
            {user?.phone}
          </span>
        </div>
        {/* Name */}
        <div className="flex justify-between items-center py-6 text-[16px]">
          <span className="text-gray-700">Name</span>
          <span className="text-woltColors-brandPressed">Haviv Bitton</span>
        </div>
        {/* Delete Account */}
        <div className="flex justify-between items-center py-6 text-[16px]">
          <span className="text-gray-700">Delete account</span>
          <span className="text-red-600 cursor-pointer">Delete</span>
        </div>
        {/* Send Receipts to Email */}
        <div className="flex justify-between items-center py-6 text-[16px]">
          <span className="text-gray-700">Send receipts to email</span>
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Clear Auto-Translation Settings */}
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700">Clear auto-translation settings</span>
          <span className="text-blue-600 cursor-pointer">Reset</span>
        </div>
        {/* Log Out */}
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700">Log out of Wolt</span>
          <span className="text-blue-600 cursor-pointer">Log out</span>
        </div>
        {/* Theme */}
        <div className="py-4">
          <span className="text-gray-700 block mb-2">Theme</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 bg-white hover:bg-blue-100">
              Auto
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100">
              Light
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100">
              Dark
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100">
              High Contrast
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Notifications</h3>
        <p className="text-sm text-gray-500 mb-2">
          I’d like to receive exclusive special offers and information from Wolt
          by PUSH NOTIFICATION. I can unsubscribe from these notifications at
          any time in the app settings.
        </p>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MeProfileSettings;

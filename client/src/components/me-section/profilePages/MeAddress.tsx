import { userContext } from "@/providers/userContext";
import { useContext, useState } from "react";
import { FaBuilding, FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddNewLocationModal from "@/components/locations/add-location-model/AddLocationModal";

const MeAddress = () => {
  const { user } = useContext(userContext); // Access user context
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] = useState(false);

  const backFromAddLocationModal = () => {
    setIsAddLocationModalOpen(false);
  };
  // Update in the app bar ths user address and icon
  const loggedInUserLocationList = user?.locations;

  // State for the current selected address

  return isAddLocationModalOpen ? (
    <AddNewLocationModal
      onBack={backFromAddLocationModal}
      onClose={backFromAddLocationModal}
    />
  ) : (
    <div className="w-[80%] max-w-[800px] mt-10 flex flex-col items-center">
      <div className="w-[80%] max-w-[800px]">
        {/* Address List */}
        <ul className="divide-y divide-gray-300">
          {loggedInUserLocationList && loggedInUserLocationList.length > 0 ? (
            loggedInUserLocationList.map(
              (location: { address: string; type: string }, index: number) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 "
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-black flex w-10 h-10 mr-1 bg-gray-200 rounded-full justify-center items-center ">
                      {getIconByType(location.type)}
                    </div>
                    <div className="mb-3">
                      <p className={"font-semibold text-[16px] mb-3"}>
                        {location.type}
                      </p>
                      <p className={`text-sm text-gray-600 `}>
                        {location.address}
                      </p>
                    </div>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div className="text-black flex p-1 mr-1 bg-gray-200 rounded-full justify-center items-center hover:bg-gray-300 hover:cursor-pointer">
                          <BsThreeDots size={18} />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <div className="text-woltColors-facebookBlueBg">
                            Edit
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="text-red-600">Delete</div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </li>
              )
            )
          ) : (
            <p className="text-gray-500 text-sm">
              There are no addresses in the user's list.
            </p>
          )}
        </ul>
      </div>
      <div
        onClick={() => setIsAddLocationModalOpen(true)}
        className="hover:cursor-pointer mr-[30px] rounded-lg gap-2 flex items-center justify-center w-[185px] h-[54px] bg-blue-100 text-BlueBackgroundAndText"
      >
        <LuPlus className="" size={18} />
        <p className="text-[16px]">Add new address</p>
      </div>
    </div>
  );
};

export default MeAddress;

// Utility function to get the icon by type
const getIconByType = (type: string) => {
  switch (type) {
    case "Work":
      return <FaBuilding size={24} />;
    case "Home":
      return <FaHome size={24} />;
    default:
      return <FaMapMarkerAlt size={24} />;
  }
};

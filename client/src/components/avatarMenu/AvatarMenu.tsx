import { useState, useContext } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { userContext } from "../../providers/userContext";
const { providerLogout } = useContext(userContext);

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          onClick={handleOpenMenu}
          className="flex items-center gap-1 px-1 py-1 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <div className="  px-1.5 py-1.5 text-gray-600 bg-yellow-100 rounded-full">
            HB
          </div>
          <div>
            {isOpen ? (
              <IoIosArrowUp color="black" size={20} />
            ) : (
              <IoIosArrowDown color="black" size={20} />
            )}
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 text-gray-600 bg-yellow-100 rounded-full">
              HB
            </div>

            <div>
              <p className="text-[13px] text-gray-500">Profile</p>
              <p className="text-lg">Haviv Bitton</p>
            </div>
            <div className="flex items-center">
              <MdKeyboardArrowRight color="black" size={30} />
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-[16px] p-2">Wolt+</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-[16px] p-2">Language:English</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-[16px] p-2">Support</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <button onClick={providerLogout}>
          <DropdownMenuItem>
            <p className="text-[16px] p-2">Log out</p>
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;

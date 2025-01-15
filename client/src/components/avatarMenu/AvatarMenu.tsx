import { useState, useContext } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { userContext } from "../../providers/userContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, providerLogout } = useContext(userContext);

  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(user);
          }}
        >
          <div className="flex items-center gap-1 px-1 py-1 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200">
            <div className="  px-1.5 py-1.5 text-gray-600 bg-yellow-100 rounded-full">
              {firstLetters(user?.fullname)}
            </div>
            <div>
              {isOpen ? (
                <IoIosArrowUp color="black" size={20} />
              ) : (
                <IoIosArrowDown color="black" size={20} />
              )}
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div onClick={() => navigate("/en/me")}>
          <DropdownMenuItem>
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 text-gray-600 bg-yellow-100 rounded-full">
                {firstLetters(user?.fullname)}
              </div>

              <div>
                <p className="text-[13px] text-gray-500">Profile</p>
                <p className="text-lg">{user?.fullname}</p>
              </div>
              <div className="flex items-center">
                <MdKeyboardArrowRight color="black" size={30} />
              </div>
            </div>
          </DropdownMenuItem>
        </div>
        <DropdownMenuItem className="hover:cursor-pointer">
          <p className="text-[16px] p-2 ">Wolt+</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <p className="text-[16px] p-2 ">Language:English</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <p className="text-[16px] p-2 ">Support</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div onClick={providerLogout}>
          <DropdownMenuItem className="hover:cursor-pointer">
            <p className="text-[16px] p-2 ">Log out</p>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;

function firstLetters(str?: string): string {
  if (!str) return "";
  const words = str.trim().split(" ");
  const firstLetter = words[0][0].toUpperCase();
  const lastLetter = words[words.length - 1][0].toUpperCase();
  return firstLetter + lastLetter;
}

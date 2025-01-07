import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import { SlHome } from "react-icons/sl";
import { log } from "console";
import CartModel from "../cart/CartModel";
import { Button } from "../ui/button";
import LoginSignUpModel from "../auth-components/Login/LoginModel";
import { userContext } from "@/providers/userContext";

const AppBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const UserContext = useContext(userContext);

  const test = UserContext.user;
  return (
    <div className=" flex  h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1 ">
        <div className="flex items-center h-full justify-start ">
          {/* Wolt Logo */}
          <div className="flex w-[80px] justify-end mr-2">
            <img src={woltLogo} alt="wolt-logo" />
          </div>
          {/* Home Icon */}
          <div
            className={`p-2 text-blue-600 mr-1 h-8 bg-blue-100 rounded-full items-center ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            <SlHome size={16} />
          </div>
          {/* Address */}
          <button
            className={`text-sm font-medium text-blue-600 hover:underline ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            Home {test?.email} (nahalat binyamin 42`)
          </button>
        </div>
      </div>
      <div className={` ${isSearchActive ? "flex-grow" : "flex-1"} `}>
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <input
            type="text"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            placeholder="search "
            className="w-full text-sm bg-transparent outline-none"
          />
          <FaSearch size={16} className="text-gray-600" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-4 items-center justify-end">
          <button
            className={`px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            HB
          </button>

          <CartModel />

          {/* _____LOGIN____ */}
          {/* Button to trigger login modal */}
          <Button onClick={() => setIsModalOpen(true)}>Log in</Button>
          <Button onClick={() => setIsModalOpen(true)}>Sign up</Button>

          {/* Conditional rendering of the modal */}
          {isModalOpen && (
            <LoginSignUpModel onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;

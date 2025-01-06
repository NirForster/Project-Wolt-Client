import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import { SlHome } from "react-icons/sl";
import { log } from "console";
import CartModel from "../cart/CartModel";

const AppBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className="flex  h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex gap-4 items-center">
          <CartModel />
          <button
            className={`px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            HB
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <input
            type="text"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            placeholder="חיפוש באתר"
            className="w-full text-sm bg-transparent outline-none"
          />
          <FaSearch size={16} className="text-gray-600" />
        </div>
      </div>
      <div className="flex-1 ">
        <div className="flex items-center h-full justify-end ">
          {/* Address */}
          <button
            className={`text-sm font-medium text-blue-600 hover:underline`}
          >
            בית (נחלת בנימין 42)
          </button>
          {/* Home Icon */}
          <div className="p-2  text-blue-600 ml-1 h-8 bg-blue-100 rounded-full items-center">
            <SlHome size={16} />
          </div>
          <div className="flex w-[80px] justify-end ml-2">
            <img src={woltLogo} alt="wolt-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;

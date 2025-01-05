import { FaSearch, FaShoppingCart } from "react-icons/fa";
import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import { SlHome } from "react-icons/sl";

const AppBar = () => {
  return (
    <div className="flex  h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaShoppingCart size={16} />
            </button>
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-black rounded-full">
              3
            </span>
          </div>
          <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200">
            HB
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <input
            type="text"
            placeholder="חיפוש באתר"
            className="w-full text-sm bg-transparent outline-none"
          />
          <FaSearch size={16} className="text-gray-600" />
        </div>
      </div>
      <div className="flex-1 ">
        <div className="flex h-full justify-end">
          <SlHome />
          <img src={woltLogo} alt="eolt-logo" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;

import { FaShoppingCart, FaSearch, FaHome } from "react-icons/fa";

const AppBar2 = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white border-b border-gray-300 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <div className="relative">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaShoppingCart size={16} />
          </button>
          <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-black rounded-full">
            3
          </span>
        </div>

        {/* Dropdown */}
        <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200">
          HB
        </button>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-gray-800">Wolt</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Address */}
        <button className="text-sm font-medium text-blue-600 hover:underline">
          בית (נחלת בנימין 42)
        </button>

        {/* Home Icon */}
        <div className="p-2 text-blue-600 bg-blue-100 rounded-full">
          <FaHome size={16} />
        </div>

        {/* Search */}
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <input
            type="text"
            placeholder="חיפוש באתר"
            className="w-full text-sm bg-transparent outline-none"
          />
          <FaSearch size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default AppBar2;

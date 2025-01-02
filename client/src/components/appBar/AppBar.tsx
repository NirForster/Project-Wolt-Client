import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import { SlHome } from "react-icons/sl";

const AppBar = () => {
  return (
    <div className="flex  h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1">left</div>
      <div className="flex-1">
        <input
          placeholder="חיפוש באתר"
          className="bg-gray-300"
          type="text"
          name=""
          id=""
        />
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

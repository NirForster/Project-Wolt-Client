import { useContext, useEffect, useState } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { SlHome } from "react-icons/sl";
import { userContext } from "../../providers/userContext";

const AppBarLocation = () => {
  const { user } = useContext(userContext);
  const [currentLoc, setCurrentLoc] = useState(
    user?.locations[user.locations.length - 1]
  );
  // const [currentLoc, setCurrentLoc] = useState(
  //   user?.locations?.length ? user.locations[user.locations.length - 1] : null
  // );

  // Update the icon
  const loggedInUserLocationIcon = () => {
    if (currentLoc?.type === "Home") {
      return <SlHome size={16} />;
    }
    if (currentLoc?.type === "Work") {
      return <BsBuildingsFill size={16} />;
    }
    return (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-woltColors-brandBg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 9.5C6 12.813 8.687 15.5 12 15.5C15.312 15.497 17.997 12.813 18 9.5C18 6.187 15.313 3.5 12 3.5C8.687 3.5 6 6.187 6 9.5ZM2.5 9.5C2.506 4.256 6.756 0.006 12 0C17.244 0.006 21.493 4.255 21.5 9.499C21.5 16.044 14.958 21.987 12.958 23.653C12.402 24.114 11.597 24.114 11.041 23.653C9.037 21.987 2.5 16.044 2.5 9.5ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
        ></path>
      </svg>
    ); // Default icon
  };

  // useEffect(() => {
  //   console.log(user?.locations);
  //   setCurrentLoc(user?.locations[user.locations.length - 1]);
  //   console.log(user?.locations);
  // }, [user]);

  useEffect(() => {
    // console.log("User object:", user);
    if (user?.locations && user.locations.length > 0) {
      setCurrentLoc(user.locations[user.locations.length - 1]);
      // console.log(
      //   "Updated location:",
      //   user.locations[user.locations.length - 1]
      // );
    }
  }, [user?.locations]);

  return (
    <div className="flex items-center">
      {/* Location Icon */}
      <div
        className={`flex p-2 text-woltColors-brandBg mr-1 h-8 bg-[#ebf7fd] rounded-full items-center `}
      >
        {loggedInUserLocationIcon()}
      </div>
      {/* Address */}
      <p
        className={`truncate-text text-sm font-medium text-woltColors-brandBg  `}
      >
        {currentLoc
          ? `${currentLoc?.type} (${currentLoc?.address})`
          : "There is no location saved"}
      </p>
    </div>
  );
};

export default AppBarLocation;

import { useContext, useEffect, useState } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { SlHome, SlLocationPin } from "react-icons/sl";
import { userContext } from "../../providers/userContext";

const AppBarLocation = () => {
  const { user } = useContext(userContext); // Access user context
  const [currentLoc, setCurrentLoc] = useState(user?.locations?.[0]);

  // Update in the app bar ths user address and icon
  const loggedInUserLocation = user?.locations?.[0];
  // if (user?.locations.length) {
  //   for (let i = 0; i < user.locations.length; i++) {
  //     if (user.locations[i].lastLocation) return i;
  //     return 0;
  //   }
  // }

  const loggedInUserLocationIcon = () => {
    if (loggedInUserLocation?.type === "Home") {
      return <SlHome size={16} />;
    }
    if (loggedInUserLocation?.type === "Work") {
      return <BsBuildingsFill size={16} />;
    }
    return <SlLocationPin size={16} />; // Default icon
  };

  // useEffect(() => {
  //   setCurrentLoc(user?.locations[user.locations.length - 1]);
  // }, [user]);

  return (
    <div className="flex items-center">
      {/* Location Icon */}
      <div
        className={`flex p-2 text-blue-600 mr-1 h-8 bg-blue-100 rounded-full items-center `}
      >
        {loggedInUserLocationIcon()}
      </div>
      {/* Address */}
      <p className={`truncate-text text-sm font-medium text-blue-600  `}>
        {currentLoc
          ? `${currentLoc?.type} (${currentLoc?.address})`
          : "There is no location saved"}
        {/* {loggedInUserLocation
          ? `${loggedInUserLocation?.type} (${loggedInUserLocation?.address})`
          : "There is no location saved"} */}
      </p>
    </div>
  );
};

export default AppBarLocation;

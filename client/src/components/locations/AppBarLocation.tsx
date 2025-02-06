import { useContext, useEffect, useState } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { SlHome, SlLocationPin } from "react-icons/sl";
import { userContext } from "../../providers/userContext";

const AppBarLocation = () => {
  const { user } = useContext(userContext);
  const [currentLoc, setCurrentLoc] = useState(user?.locations?.[0]);

  //  Check what is the last location of the user
  if (user?.locations.length) {
    for (let i = 0; i < user.locations.length; i++) {
      if (user.locations[i].lastLocation) setCurrentLoc(user.locations[i]);
    }
  }

  // Update the icon
  const loggedInUserLocationIcon = () => {
    if (currentLoc?.type === "Home") {
      return <SlHome size={16} />;
    }
    if (currentLoc?.type === "Work") {
      return <BsBuildingsFill size={16} />;
    }
    return <SlLocationPin size={16} />; // Default icon
  };

  useEffect(() => {
    setCurrentLoc(user?.locations[user.locations.length - 1]);
  }, [user?.locations]);

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
      </p>
    </div>
  );
};

export default AppBarLocation;

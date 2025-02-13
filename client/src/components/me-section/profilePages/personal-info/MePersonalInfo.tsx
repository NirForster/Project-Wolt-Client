import FavoritesSection from "./FavoriteSection";
import InfoCards from "./TokensAndCredits";
import UserDetails from "./UserDetails";
import { useContext } from "react";

import { userContext } from "../../../../providers/userContext";

const MePersonalInfo = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      <UserDetails
        name={user?.fullname || "error"}
        email={user?.email || "error"}
        phone={user?.phone || 0}
        photo={user?.photo || "error"}
      />
      <InfoCards />
      <FavoritesSection />
    </div>
  );
};

export default MePersonalInfo;

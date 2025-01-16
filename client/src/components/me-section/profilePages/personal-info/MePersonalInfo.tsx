import FavoritesSection from "./FavoriteSection";
import InfoCards from "./TokensAndCredits";
import UserDetails from "./UserDetails";

const MePersonalInfo = () => {
  return (
    <div>
      <UserDetails
        name={"baba mama"}
        email={"baba@gmail.com"}
        phone={"0505550550"}
      />
      <InfoCards />
      <FavoritesSection />
    </div>
  );
};

export default MePersonalInfo;

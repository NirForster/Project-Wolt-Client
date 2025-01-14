import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import CartModel from "../cart/CartModel";
import { Button } from "../ui/button";
import LoginModel from "../auth-components/Login/LoginModel";
import SignUpModel from "../auth-components/register/RegisterModel";
import { userContext } from "../../providers/userContext";
import AppBarLocation from "../locations/AppBarLocation";
import LocationsModel from "../locations/LocationsModel";
import AvatarMenu from "../avatarMenu/AvatarMenu";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLocationsModel, setIsLocationsModel] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { user } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <div className="flex h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex items-center h-full justify-start ">
          {/* Wolt Logo */}
          <div
            className="flex w-[80px] justify-end mr-2 hover:cursor-pointer"
            onClick={() => navigate("/discovery")}
          >
            <img src={woltLogo} alt="wolt-logo" />
          </div>
          <div
            onClick={() => setIsLocationsModel(true)}
            className={`hover:cursor-pointer ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            <AppBarLocation />
          </div>
        </div>
      </div>
      {/* Search Bar */}
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
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex gap-4 items-center justify-end">
          {/* Conditional Rendering Based on User Authentication */}
          {!user ? (
            <>
              {/* Show only if the user is not logged in */}
              <button onClick={() => setIsLoginModalOpen(true)}>Log in</button>
              <Button
                className="bg-BlueLightBackground text-woltColors-brandBg hover:bg-woltColors-brandHovered"
                onClick={() => setIsSignUpModalOpen(true)}
              >
                Sign up
              </Button>
            </>
          ) : (
            <>
              {!isSearchActive && <AvatarMenu />}
              <CartModel />
            </>
          )}
          {/* Modals */}
          {isLoginModalOpen && (
            <LoginModel onClose={() => setIsLoginModalOpen(false)} />
          )}
          {isSignUpModalOpen && (
            <SignUpModel onClose={() => setIsSignUpModalOpen(false)} />
          )}
          {isLocationsModel && (
            <LocationsModel onClose={() => setIsLocationsModel(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;

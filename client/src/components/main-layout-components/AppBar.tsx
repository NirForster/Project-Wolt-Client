import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import CartModel from "../cart/CartModel";
import { Button } from "../ui/button";
import LoginModel from "../auth-components/Login/LoginModel";
import SignUpModel from "../auth-components/register/RegisterModel";
import { userContext } from "../../providers/userContext";
import AppBarLocation from "../locations/AppBarLocation";
import LocationsModel from "../locations/LocationsModel";
import AvatarMenu from "../avatarMenu/AvatarMenu";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import woltLogoLottie from "@/assets/lottie-files/wolt_logo_animation_themeable.json";

interface AppBarProps {
  handleSearchChange?: (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => void | undefined;
}

const AppBar = ({ handleSearchChange }: AppBarProps) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLocationsModel, setIsLocationsModel] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current path is the landing page
  const isLandingPage = location.pathname === "/";
  if (isLandingPage) {
    navigate("/en/discovery/tlv-herzliya-area");
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User's Location:", latitude, longitude);
        // Send this data to the backend
      },
      (error) => {
        console.error("Error fetching location:", error);
        // Handle error or show manual location input
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

  return (
    <div className="flex h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <div className="flex items-center h-full justify-start ">
          {/* Wolt Logo */}
          <div
            className="flex max-w-[120px] justify-end mr-2 hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div style={{ filter: "invert(100%)" }}>
              <Lottie
                animationData={woltLogoLottie}
                loop={false}
                autoplay={true}
              />
            </div>
          </div>
          {/* Location Component - Hide on Landing Page */}
          {!isLandingPage && (
            <div
              onClick={() => setIsLocationsModel(true)}
              className={`hover:cursor-pointer ${
                isSearchActive ? "opacity-0" : "opacity-100"
              }`}
            >
              <AppBarLocation />
            </div>
          )}
        </div>
      </div>

      {/* Search Bar - Hide on Landing Page */}
      {!isLandingPage && (
        <div className={` ${isSearchActive ? "flex-grow" : "flex-1"} `}>
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
            <input
              type="text"
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => setIsSearchActive(false)}
              placeholder="Search"
              className="w-full text-sm bg-transparent outline-none"
              onChange={handleSearchChange}
            />
            <FaSearch size={16} className="text-gray-600" />
          </div>
        </div>
      )}

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

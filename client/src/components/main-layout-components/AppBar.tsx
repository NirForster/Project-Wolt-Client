import { useState, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import CartModel from "../cart/CartModel";
import { Button } from "../ui/button";
import LoginModel from "../auth-components/Login/LoginModel";
import SignUpModel from "../auth-components/register/RegisterModel";
import { userContext } from "../../providers/userContext";
import AppBarLocation from "../locations/AppBarLocation";
import LocationsModel from "../locations/LocationsModel";
import AvatarMenu from "../avatarMenu/AvatarMenu";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import woltLogoLottie from "@/assets/lottie-files/wolt_logo_animation_themeable.json";

interface AppBarProps {
  handleSearchChange?: (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => void | undefined;
}

const AppBar = ({ handleSearchChange }: AppBarProps) => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(
    email ? true : false
  );
  const [isLocationsModel, setIsLocationsModel] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current path is the landing page
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User's Location:", latitude, longitude);
        // save this data to user context (and local storage?)
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
    <div
      className={`flex h-[70px] bg-white w-full px-5 py-3  sticky top-0 z-30 ${
        hasScrolled
          ? "border-b border-gray-200 shadow-lg"
          : "border-b border-gray-200 shadow-none"
      }`}
    >
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
          <div className="flex items-center px-4 py-2 bg-[#2021251f] rounded-full">
            <FaSearch size={16} className="text-gray-600" />
            <input
              type="text"
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => setIsSearchActive(false)}
              placeholder="Search in Wolt..."
              className="w-full pl-2 text-sm bg-transparent outline-none"
              onChange={handleSearchChange}
            />
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
              <Button
                className="bg-transparent shadow-none font-semibold text-sm text-woltColors-textDefault hover:bg-transparent"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Log in
              </Button>
              <Button
                className="bg-BlueLightBackground shadow-none  font-semibold text-[16px] text-woltColors-brandBg hover:bg-BlueBackgroundOnHover"
                onClick={() => setIsLoginModalOpen(true)}
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
            <SignUpModel
              onClose={() => setIsSignUpModalOpen(false)}
              email={email}
            />
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

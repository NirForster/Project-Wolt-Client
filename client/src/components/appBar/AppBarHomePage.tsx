import { useState, useContext, useEffect } from "react";
import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import { Button } from "../ui/button";
import LoginModel from "../auth-components/Login/LoginModel";
import SignUpModel from "../auth-components/register/RegisterModel";
import { userContext } from "@/providers/userContext";
import { useNavigate } from "react-router-dom";

const AppBarHomePage = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook
  const { user, providerLogout } = useContext(userContext); // Access user context

  // ✅ Corrected: Navigate when user is logged in using useEffect
  useEffect(() => {
    if (user) {
      navigate("/discovery");
    }
  }, [user, navigate]); // Ensure it only runs when the user state changes

  return (
    <div className="flex h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex items-center h-full justify-between ">
          {/* Wolt Logo */}
          <div className="flex w-[80px] justify-end mr-2">
            <img src={woltLogo} alt="wolt-logo" />
          </div>
          <div>
            {/* Conditional Rendering Based on User Authentication */}
            {user ? (
              <>
                {/* Show only if the user is logged in */}
                <p className="text-sm font-medium text-gray-700">
                  Welcome, {user.fname}
                </p>
                <Button
                  className="text-sm font-medium bg-red-500 text-white hover:bg-red-600"
                  onClick={providerLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/* Show only if the user is not logged in */}
                <button onClick={() => setIsModalOpen(true)}>Log in</button>
                <Button
                  className="bg-BlueLightBackground text-woltColors-brandBg hover:bg-woltColors-brandHovered"
                  onClick={() => setIsSignUpModalOpen(true)}
                >
                  Sign up
                </Button>
              </>
            )}

            {/* Modals */}
            {isModalOpen && (
              <LoginModel onClose={() => setIsModalOpen(false)} />
            )}
            {isSignUpModalOpen && (
              <SignUpModel onClose={() => setIsSignUpModalOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBarHomePage;

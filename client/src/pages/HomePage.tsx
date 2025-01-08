import { testShopApiConnection } from "../services/apiTest";
import { useState } from "react";
import AppBar from "@/components/appBar/AppBar";
import { Button } from "../components/ui/button";
import SignUpModel from "../components/auth-components/register/RegisterModel";

const HomePage = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleTestConnection = async () => {
    await testShopApiConnection();
  };

  return (
    <div>
      <h1>HomePage</h1>
      <AppBar />
      <button
        onClick={handleTestConnection}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Test User API Connection
      </button>
      {/* _____SignUp____ */}
      {/* Button to trigger login modal */}
      <Button
        className="bg-woltColors-bgSurface"
        onClick={() => setIsSignUpModalOpen(true)}
      >
        Log in
      </Button>
      <Button
        className="bg-BlueLightBackground text-woltColors-brandBg hover:bg-woltColors-brandHovered"
        onClick={() => setIsSignUpModalOpen(true)}
      >
        Sign up
      </Button>

      {/* Conditional rendering of the modal */}
      {isSignUpModalOpen && (
        <SignUpModel onClose={() => setIsSignUpModalOpen(false)} />
      )}
    </div>
  );
};

export default HomePage;

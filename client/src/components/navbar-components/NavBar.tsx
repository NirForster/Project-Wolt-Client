import React, { useState } from "react";
import { Button } from "../ui/button";
import LoginSignUpModel from "../auth-components/Login/Login&SignUpModel";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between p-4 shadow-md bg-white">
      <span className="text-lg font-bold">NavBar</span>

      {/* Button to trigger modal */}
      <Button onClick={() => setIsModalOpen(true)}>Log in</Button>
      <Button onClick={() => setIsModalOpen(true)}>Sign up</Button>

      {/* Conditional rendering of the modal */}
      {isModalOpen && (
        <LoginSignUpModel onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default NavBar;

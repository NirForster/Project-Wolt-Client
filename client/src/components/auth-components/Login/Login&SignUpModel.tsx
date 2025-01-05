import React from "react";
import { LoginForm } from "./LoginForm";

interface LoginSignUpModelProps {
  onClose: () => void;
}

const LoginSignUpModel: React.FC<LoginSignUpModelProps> = ({ onClose }) => {
  return (
    <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg h-[670px] max-w-[500px] relative">
        {/* Modal Content */}
        <LoginForm onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginSignUpModel;

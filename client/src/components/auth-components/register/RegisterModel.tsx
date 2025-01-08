import React from "react";
// import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./RegisterForm";

interface SignUpModelProps {
  onClose: () => void;
}

const SignUpModel: React.FC<SignUpModelProps> = ({ onClose }) => {
  return (
    <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg h-[670px] max-w-[500px] relative">
        {/* Modal Content */}
        {/* <LoginForm onClose={onClose} /> */}
        <SignUpForm onClose={onClose} />
      </div>
    </div>
  );
};

export default SignUpModel;

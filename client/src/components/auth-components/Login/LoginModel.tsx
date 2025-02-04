import React from "react";
// import { LoginForm } from "./LoginForm";
import { LoginFormWithPassword } from "./LoginFormWithPassword";
import { useLocation } from "react-router-dom";

interface LoginModelProps {
  onClose: () => void;
}

const LoginModel: React.FC<LoginModelProps> = ({ onClose }) => {
  const location = useLocation();

  function handleOnClick(
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) {
    if (ev) {
      ev.stopPropagation();
    }
    onClose();
  }

  return (
    <button onClick={onClose}>
      <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white rounded-lg shadow-lg h-[670px] max-w-[500px] relative">
          {/* Modal Content */}
          {/* <LoginForm onClose={onClose} /> */}
          <button
            className="cursor-default"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          >
            <LoginFormWithPassword
              onClose={onClose}
              lastURL={location.pathname}
            />
          </button>
        </div>
      </div>
    </button>
  );
};

export default LoginModel;

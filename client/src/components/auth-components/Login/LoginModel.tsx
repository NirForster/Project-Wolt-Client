import React, { useState } from "react";
// import { LoginForm } from "./LoginForm";
import { LoginFormWithPassword } from "./LoginFormWithPassword";
import { useLocation } from "react-router-dom";
import EmailSent from "../EmailSent";

interface LoginModelProps {
  onClose: () => void;
}

const LoginModel: React.FC<LoginModelProps> = ({ onClose }) => {
  const location = useLocation();

  const [email, setEmail] = useState("");

  function handleSetEmail(email: string) {
    setEmail(email);
  }

  return (
    <button onClick={onClose}>
      <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white rounded-lg shadow-lg h-fit max-w-[500px] relative">
          {/* Modal Content */}
          {/* <LoginForm onClose={onClose} /> */}
          <button
            className="cursor-default"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          >
            {!!email ? (
              <EmailSent
                email={email}
                handleSetEmail={handleSetEmail}
                onClose={onClose}
                lastURL={location.pathname}
              ></EmailSent>
            ) : (
              <LoginFormWithPassword
                onClose={onClose}
                lastURL={location.pathname}
                handleSetEmail={handleSetEmail}
              />
            )}
          </button>
        </div>
      </div>
    </button>
  );
};

export default LoginModel;

//providerLogin(userData.user); //update the user in context
// onClose(); // Close the form on successful login

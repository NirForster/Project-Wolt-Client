import React from "react";
import AddressList from "./AddressList";
// import { LoginForm } from "./LoginForm";

interface LoginModelProps {
  onClose: () => void;
}

const AddressModel: React.FC<LoginModelProps> = ({ onClose }) => {
  return (
    <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg h-[670px] max-w-[500px] relative">
        <AddressList onClose={onClose} />
      </div>
    </div>
  );
};

export default AddressModel;

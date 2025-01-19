import { LuPlus } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";

import cibusImage from "@/assets/cibusImage.jpeg";
import googlePayImage from "@/assets/googlePayImage.png";

const otherMethods = [
  { name: "Cibus", icon: cibusImage },
  { name: "Google Pay", icon: googlePayImage },
];

const MePayment = () => {
  return (
    <div className="w-full max-w-[800px]">
      <div className="flex flex-col items-start">
        <h1 className="font-woltHeader text-2xl mt-12">Payment methods</h1>
        <p className="font-woltHeader text-sm mt-8">Credit and debit cards</p>
        <div className="hover:cursor-pointer mt-4 rounded-lg gap-2 flex items-center justify-center">
          <LuPlus className="" size={18} />
          <p className="text-[16px]">Add new card</p>
        </div>
      </div>
      <div>
        <p className="font-woltHeader text-sm mt-8">Other methods</p>
      </div>
      <div>
        {otherMethods.map((method: { name: string; icon: any }) => (
          <li
            key={method.name}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <div className="flex items-center space-x-3">
              <div className="text-black flex w-10 h-10 mr-1 bg-gray-200 rounded-full justify-center items-center ">
                <img src={method.icon} alt={`${method.name} logo`} />
              </div>
              <div className="mb-3">
                <p className={"font-semibold text-[16px] mb-3"}>
                  {method.name}
                </p>
              </div>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="text-black flex p-1 mr-1 bg-gray-200 rounded-full justify-center items-center hover:bg-gray-300 hover:cursor-pointer">
                    <BsThreeDots size={18} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <div className="text-woltColors-facebookBlueBg">Edit</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="text-red-600">Delete</div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MePayment;

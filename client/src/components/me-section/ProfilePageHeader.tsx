import { LuMessagesSquare } from "react-icons/lu";

const ProfilePageHeader = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="pl-[30px] font-woltHeader text-[40px]">Profile</div>
      <div className="mr-[30px] rounded-lg gap-2 flex items-center justify-center w-[185px] h-[54px] bg-blue-100 text-BlueBackgroundAndText">
        <LuMessagesSquare className="" size={18} />
        <p className="text-[16px]">Contact support</p>
      </div>
    </div>
  );
};

export default ProfilePageHeader;

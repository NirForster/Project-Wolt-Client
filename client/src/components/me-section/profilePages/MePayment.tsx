import { LuPlus } from "react-icons/lu";

const MePayment = () => {
  return (
    <div>
      <h1 className="">Payment methods</h1>
      <p>Credit and debit cards</p>
      <div className="hover:cursor-pointer mr-[30px] rounded-lg gap-2 flex items-center justify-center w-[185px] h-[54px]">
        <LuPlus className="" size={18} />
        <p className="text-[16px]">Add new card</p>
      </div>
    </div>
  );
};

export default MePayment;

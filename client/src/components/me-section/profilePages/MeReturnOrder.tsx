import { useSelector } from "react-redux";
import { RootState } from "@/state-redux/store/store";

const MeOrderHistory = () => {
  const { fname, lname, email } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>{`${fname} ${lname}`}</h1>
      <p>{email}</p>
    </div>
  );
};

export default MeOrderHistory;

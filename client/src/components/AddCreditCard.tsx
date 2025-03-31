interface AddCreditCardProps {
  onClose: () => void;
}
export default function AddCreditCard({ onClose }: AddCreditCardProps) {
  return (
    <button
      className="w-full h-full bg-[#00000025] flex justify-center items-center"
      onClick={(ev) => {
        ev.stopPropagation();
      }}
    >
      <div className="bg-white w-fit p-2 h-[90%] text-right items-center justify-center flex flex-col text-right">
        <label htmlFor="creditCard" className="font-bold">
          מספר כרטיס
        </label>
        <input
          className="w-full border"
          placeholder="3456 9012 5678 1234"
          id="creditCard"
          name="creditCard"
        />
        <div className="flex gap-2">
          <div className="flex flex-col flex-1">
            <label htmlFor="securityCode" className="font-bold">
              קוד אבטחה
            </label>
            <input
              className="border"
              placeholder=""
              id="securityCode"
              name="securityCode"
            />
          </div>

          <div className="flex flex-col flex-[2]">
            <label htmlFor="expireDate" className="font-bold">
              תוקף
            </label>
            <input
              className="border"
              placeholder="שנה/חודש"
              id="expireDate"
              name="expireDate"
            />
          </div>
        </div>
      </div>
    </button>
  );
}

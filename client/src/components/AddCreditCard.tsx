interface AddCreditCardProps {
  onClose: (cardName: string) => void;
}
export default function AddCreditCard({ onClose }: AddCreditCardProps) {
  const isAllDigits = (str: string): boolean => {
    return /^\d+$/.test(str);
  };

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const creditCard = formData.get("creditCard") as string;
    if (creditCard.length !== 12 || !isAllDigits(creditCard)) {
      alert("Please enter valid credit card number with 12 digits");
      return;
    }
    const securityCode = formData.get("securityCode") as string;
    if (securityCode.length !== 3 || !isAllDigits(securityCode)) {
      alert("Please enter valid security code with 3 digits");
      return;
    }
    const expireDate = formData.get("expireDate") as string;
    const currentDate = new Date();
    const selectedDate = new Date(expireDate);

    if (selectedDate <= currentDate) {
      alert("Please enter a future expiration date");
      return;
    }
    const cardName = formData.get("cardName") as string;
    if (
      !cardName ||
      !cardName.trim() ||
      !/^[a-zA-Z\u0590-\u05FF\s]+$/.test(cardName)
    ) {
      alert("Please enter valid card name");
      return;
    }
    onClose(cardName);
  };

  return (
    <button
      className="w-full h-full bg-[#00000025] flex justify-center items-center"
      onClick={(ev) => {
        ev.stopPropagation();
      }}
    >
      <form
        className="bg-white relative max-w-[375px] p-2 h-fit items-center justify-center flex flex-col text-right gap-2"
        onSubmit={(ev) => handleFormSubmit(ev)}
      >
        <label htmlFor="creditCard" className="font-bold text-right self-end">
          מספר כרטיס
        </label>
        <input
          inputMode="numeric"
          className="w-full border"
          placeholder="3456 9012 5678 1234"
          id="creditCard"
          required
          name="creditCard"
        />
        <br />
        <div className="flex gap-2 w-full">
          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="securityCode" className="font-bold">
              קוד אבטחה
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{3}"
              maxLength={3}
              className="border"
              placeholder=""
              id="securityCode"
              required
              name="securityCode"
            />
          </div>

          <div className="flex flex-col flex-[2] gap-2">
            <label htmlFor="expireDate" className="font-bold">
              תוקף
            </label>
            <input
              type="month"
              name="expireDate"
              id="expireDate"
              required
              className="border"
              placeholder="שנה/חודש"
            />
          </div>
        </div>
        <br />
        <span className=" max-w-[100%] text-center">
          ההזמנות ב- Wolt מתבצעות דרך כרטיס אשראי. אין מה לדאוג, הכרטיס יחוייב
          רק כשההזמנה תגיע אלייך
        </span>
        <br />
        <input
          placeholder="שם לכרטיס"
          required
          className="border w-full text-right"
          id="cardName"
          name="cardName"
        />
        <br />
        <button className="flex justify-between bg-[#039de0] w-full px-2 py-1 rounded">
          <span> </span>
          <span> </span>
          <span> </span>
          <span className="font-bold">להוספת אמצעי תשלום</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="h-5 w-5"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M9 10a.99.99 0 01-.5.847v.653a.5.5 0 01-1 0v-.653A.99.99 0 017 10a1.001 1.001 0 012 0zM5 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H5V5zm8.5 1H12V5c0-2.206-1.794-4-4-4S4 2.794 4 5v1H2.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5z"
            ></path>
          </svg>
          <span> </span>
        </button>
        <button onClick={() => onClose("")} className="absolute top-2 left-2">
          <img src="assets/x-circle-fill.png" alt="X" />
        </button>
      </form>
    </button>
  );
}

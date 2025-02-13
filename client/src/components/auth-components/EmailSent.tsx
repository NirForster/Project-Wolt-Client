import { sendEmail } from "@/services/api/auth";
import { useState } from "react";
import Loader from "../Loader/Loader";

interface EmailSentProps {
  email: string;
  handleSetEmail: (email: string) => void;
  onClose: () => void;
  lastURL: string;
}

export default function EmailSent({
  email,
  handleSetEmail,
  onClose,
  lastURL,
}: EmailSentProps) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleResendEmail() {
    setIsLoading(true);
    const userData = await sendEmail(email, lastURL, window.location.origin);
    setIsLoading(false);
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <button onClick={() => handleSetEmail("")}>
            <img src="/assets/photos/arrow-left.png" alt="go back" />
          </button>
          <button onClick={() => onClose()}>
            <img src="/assets/photos/x-circle-fill.png" alt="close" />
          </button>
        </div>
        <p className="font-woltHeader">Great, check your inbox</p>
        <p>
          We've just sent a sign-in link to {email}. Please check your spam
          folder in case you didn't get the email.
        </p>
        <button
          onClick={() =>
            window.open(
              `https://mail.google.com/mail/u/0/#search/from:(${encodeURIComponent(
                "wolt8767@gmail.com"
              )})+newer_than:1h`
            )
          }
        >
          <div className="m-4 border flex items-center w-[90%]">
            <img
              className="self-start w-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkRFuG-FebXK8BQPEo80Ai_KGWyMPm6UT6w&s"
              alt="Google logo"
            />
            <div className="relative right-0 left-0 flex items-center bg-cyan-400">
              <p className="self-center">Open Gmail</p>
            </div>
          </div>
        </button>
        {isLoading ? (
          <Loader bgColor={"#039de0"} />
        ) : (
          <button
            onClick={() => {
              handleResendEmail();
            }}
          >
            Resend email
          </button>
        )}
      </div>
    </>
  );
}

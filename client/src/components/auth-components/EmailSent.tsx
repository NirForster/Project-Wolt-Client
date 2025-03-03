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
      <div className="flex flex-col m-4 gap-3  items-start justify-start relative">
        {/* back and close */}
        <div className="flex justify-between top-0 w-full">
          <button onClick={() => handleSetEmail("")}>
            <img src="/assets/photos/arrow-left.png" alt="go back" />
          </button>
          <button onClick={() => onClose()}>
            <img src="/assets/photos/x-circle-fill.png" alt="close" />
          </button>
        </div>

        {/* paragraphs  */}
        <div className="flex items-start flex-col justify-start my-4 self-start text-start gap-4">
          <p className="font-woltHeader font-bold text-[24px]">
            Great, check your inbox
          </p>
          <p>
            We've just sent a sign-in link to {email}. Please check your spam
            folder in case you didn't get the email.
          </p>
        </div>

        {/* email sent */}
        <div
          className={`bg-[#edfceb] w-full h-12 ${
            isLoading ? "hidden" : ""
          } text-start flex items-center p-2`}
        >
          <p>✅ Email sent!</p>
        </div>

        {/* open gmail */}
        <button
          className="border relative flex items-center w-full h-12 rounded-lg"
          onClick={() =>
            window.open(
              `https://mail.google.com/mail/u/0/#search/from:(${encodeURIComponent(
                "wolt8767@gmail.com"
              )})+newer_than:1h`
            )
          }
        >
          <img
            className="absolute w-5 left-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkRFuG-FebXK8BQPEo80Ai_KGWyMPm6UT6w&s"
            alt="Google logo"
          />
          <div className="w-full flex items-center justify-center ">
            <p className="self-center font-bold text-[16px]">Open Gmail</p>
          </div>
        </button>

        {/* resend email */}
        <div className="h-12 bg-[#ecf7fd] w-full flex items-center justify-center text-[#039de0] rounded-lg">
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
      </div>
    </>
  );
}

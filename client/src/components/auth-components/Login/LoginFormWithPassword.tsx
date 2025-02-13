import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
import { sendEmail } from "../../../services/api/auth";
import {
  REGEX_EMAIL,
  EMAIL_MESSAGE,
} from "../../../lib/constants/auth-constants";
import { userContext } from "@/providers/userContext";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader/Loader";

interface LoginFormProps {
  className?: string;
  onClose: () => void;
  lastURL?: string;
  handleSetEmail: (email: string) => void;
}

export function LoginFormWithPassword({
  className,
  onClose,
  lastURL,
  handleSetEmail,
  ...props
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [_emailError, setEmailError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!lastURL) {
    lastURL = "/";
  }

  const navigate = useNavigate();

  const { providerLogin } = useContext(userContext);

  const validateEmail = (email: string) => {
    if (!REGEX_EMAIL.test(email)) {
      setEmailError(EMAIL_MESSAGE);
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }
    setIsLoading(true);
    // alert(window.location.origin);
    try {
      const userData = await sendEmail(email, lastURL, window.location.origin);
      // alert("Login successful!");
      handleSetEmail(email);
      navigate(lastURL); // Redirect to Discovery page after successful login
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className={cn("", className)} {...props}>
      <Card className="shadow-none border-none flex flex-col">
        {/* Close Button in the Top Right */}
        <CardHeader className="flex justify-center align-middle px-[2rem] py-0">
          <div className="flex top-0 left-0 right-0 justify-center items-center px-[4.5rem] pb-2 h-[4.5rem]"></div>
          <button
            onClick={onClose}
            tabIndex={0}
            className="flex items-center justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground absolute top-3 right-3 text-lg rounded-full font-bold bg-woltColors-bgSurface hover:bg-woltColors-bgSurfaceHovered w-[40px] h-[40px] p-0 m-0 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
              style={{ width: "20px", height: "20px" }}
            >
              <path d="M2.44 19.44a1.5 1.5 0 002.121 2.121l7.262-7.26a.25.25 0 01.354 0l7.262 7.262a1.5 1.5 0 102.122-2.12l-7.26-7.266a.25.25 0 010-.354l7.262-7.262a1.5 1.5 0 00-2.124-2.12L12.177 9.7a.25.25 0 01-.354 0L4.561 2.44A1.5 1.5 0 002.44 4.56L9.7 11.823a.25.25 0 010 .354L2.44 19.44z"></path>
            </svg>
          </button>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-col">
            <CardTitle className="text-[32px] mb-2 h-8 font-woltHeader ">
              Create an account or log in
            </CardTitle>
            <CardDescription className="mt-4 mb-8 font-sans text-[16px] text-woltColors-textDefault">
              Log in below or create a new Wolt account.
            </CardDescription>
          </div>

          {/* Form Submission Handling */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="flex flex-col gap-2 ">
                <Button
                  variant="outline"
                  className="w-full font-bold max-h-[54px] rounded-lg h-14 p-0 relative text-[16px]"
                >
                  <div className="absolute left-4">
                    {" "}
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                    >
                      <g transform="translate(-.06 -.064)">
                        <path
                          fill="none"
                          d="M.06.064h19.548v19.969H.06z"
                        ></path>
                        <clipPath id="google_icon_svg__a">
                          <path d="M.06.064h19.548v19.969H.06z"></path>
                        </clipPath>
                        <g clip-path="url(#google_icon_svg__a)">
                          <path
                            fill="none"
                            d="M.06.063h19.475v19.883H.061z"
                          ></path>
                          <path
                            d="M19.55 10.257c0-.705-.063-1.382-.18-2.031h-9.354v3.841h5.345a4.572 4.572 0 01-1.982 2.997v2.493h3.21c1.877-1.73 2.961-4.276 2.961-7.3z"
                            fill="#4285f4"
                          ></path>
                          <path
                            d="M10.016 19.963c2.682 0 4.93-.89 6.572-2.406l-3.209-2.493c-.89.596-2.027.948-3.363.948-2.587 0-4.776-1.748-5.558-4.095H1.14v2.574a9.93 9.93 0 008.876 5.472z"
                            fill="#34a853"
                          ></path>
                          <path
                            d="M4.458 11.917a5.97 5.97 0 01-.31-1.886c0-.654.112-1.292.31-1.888V5.57H1.14a9.94 9.94 0 000 8.92l3.318-2.574z"
                            fill="#fbbc05"
                          ></path>
                          <path
                            d="M10.016 4.05c1.457 0 2.767.5 3.796 1.484l2.85-2.848C14.94 1.083 12.691.099 10.015.099A9.927 9.927 0 001.14 5.571l3.318 2.572C5.24 5.797 7.43 4.05 10.016 4.05z"
                            fill="#ea4335"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-black text-white hover:bg-woltColors- hover:text-white font-bold max-h-[54px] rounded-lg h-14 p-0 relative text-[16px]"
                >
                  <div className="absolute left-4">
                    <svg
                      viewBox="0 0 18 21"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgba(255, 255, 255, 1)"
                      style={{ width: "1rem" }}
                    >
                      <path d="M9.267 4.846c.999 0 2.25-.64 2.995-1.495.675-.774 1.168-1.856 1.168-2.937 0-.147-.014-.294-.043-.414-1.11.04-2.446.708-3.248 1.602-.633.68-1.21 1.749-1.21 2.844 0 .16.029.32.043.373a1.7 1.7 0 00.295.027zM5.752 21c1.364 0 1.968-.868 3.67-.868 1.73 0 2.11.841 3.628.841 1.49 0 2.49-1.308 3.431-2.59 1.055-1.468 1.49-2.91 1.519-2.977-.098-.027-2.953-1.135-2.953-4.245 0-2.697 2.25-3.912 2.376-4.005-1.49-2.03-3.754-2.083-4.373-2.083-1.673 0-3.038.961-3.895.961-.928 0-2.152-.907-3.6-.907C2.798 5.127 0 7.289 0 11.374c0 2.537 1.04 5.22 2.32 6.956C3.417 19.799 4.373 21 5.752 21z"></path>
                    </svg>{" "}
                  </div>
                  Continue with Apple
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-14  p-0 bg-woltColors-facebookBlueBg hover:bg-woltColors-facebookBlueBgHover hover:text-white text-white font-bold max-h-[54px] relative rounded-lg text-[16px]"
                >
                  <div className="absolute left-4">
                    <svg
                      viewBox="0 0 16 16"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.0978 8.04889C16.0978 3.60361 12.4942 0 8.04889 0C3.60361 0 0 3.60361 0 8.04889C0 12.0663 2.94336 15.3962 6.79125 16V10.3755H4.74759V8.04889H6.79125V6.27562C6.79125 4.25836 7.99289 3.1441 9.83143 3.1441C10.7121 3.1441 11.6332 3.3013 11.6332 3.3013V5.28208H10.6182C9.61835 5.28208 9.30654 5.90253 9.30654 6.53906V8.04889H11.5388L11.182 10.3755H9.30653V16C13.1544 15.3962 16.0978 12.0663 16.0978 8.04889Z"></path>
                    </svg>
                  </div>
                  Continue with Facebook
                </Button>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  or continue with email
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-[54px] mb-2"
                  />
                  {/* <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-[54px] mb-2"
                  /> */}

                  <Button
                    type="submit"
                    className="w-full bg-woltColors-brandBg hover:bg-woltColors-brandHovered text-[16px] h-[54px]"
                  >
                    {isLoading ? <Loader bgColor="#224865" /> : <p>Next</p>}
                  </Button>
                </div>
              </div>
              <span className="text-xs p-1 font-thin text-woltColors-textSubdued">
                Please visit{" "}
                <a
                  href="https://explore.wolt.com/en/isr/privacy"
                  className=" text-woltColors-brandDisabled"
                >
                  Wolt Privacy Statement
                </a>{" "}
                to learn more about personal data processing at Wolt. You can
                access the local Privacy Statement related to your Wolt account
                after you have provided the country and language preferences
                applicable to you during registration. This site is protected by
                hCaptcha. The hCaptcha{" "}
                <a
                  href="https://www.hcaptcha.com/privacy"
                  className=" text-woltColors-brandDisabled"
                >
                  Privacy Policy{" "}
                </a>
                and{" "}
                <a
                  href="https://www.hcaptcha.com/terms"
                  className=" text-woltColors-brandDisabled"
                >
                  Terms of Service{" "}
                </a>
                apply.
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

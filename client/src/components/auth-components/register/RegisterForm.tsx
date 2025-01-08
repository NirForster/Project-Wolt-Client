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
import { useState } from "react";
import { REGEX_EMAIL, EMAIL_MESSAGE } from "@/lib/constants/auth-constants";
import { signup } from "../../../services/auth";

interface SignUpFormProps {
  className?: string;
  onClose: () => void;
}

export function SignUpForm({ className, onClose, ...props }: SignUpFormProps) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    if (!REGEX_EMAIL.test(email)) {
      setEmailError(EMAIL_MESSAGE);
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePassword = (password: string) => {
    if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters long.");
      return false;
    }
    setPasswordError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email) || !validatePassword(password)) return;

    try {
      await signup(fname, lname, email, password, phone);
      alert("Account created successfully!");
      onClose(); // Close modal after success
    } catch (error) {
      alert("Error creating account. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className={cn("", className)} {...props}>
      <Card className="shadow-none border-none flex flex-col">
        {/* Close Button */}
        <CardHeader className="flex justify-center align-middle px-[2rem] py-0">
          <div
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
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <CardTitle className="text-[32px] mb-2 h-8 font-woltHeader ">
            Create an account
          </CardTitle>
          <CardDescription className="mt-4 mb-8 font-sans text-[16px] text-woltColors-textDefault">
            Fill in the details below to create your account.
          </CardDescription>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {/* Country Field (Static for now) */}
              <div>
                <label className="text-sm font-medium">Country</label>
                <Input value="Israel" disabled className="h-[54px] mb-2" />
              </div>

              {/* First Name and Last Name */}
              <div className="flex gap-2">
                <Input
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                  className="h-[54px] mb-2"
                />
                <Input
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                  className="h-[54px] mb-2"
                />
              </div>

              {/* Email Input */}
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                  required
                  className={`h-[54px] mb-2 ${
                    emailError ? "border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex gap-2">
                <Input
                  id="countryCode"
                  value="+972"
                  disabled
                  className="h-[54px] w-1/4"
                />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-[54px] w-3/4"
                />
              </div>

              {/* Password Input */}
              <div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => validatePassword(password)}
                  required
                  className={`h-[54px] mb-2 ${
                    passwordError ? "border-red-500" : ""
                  }`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-woltColors-brandBg hover:bg-woltColors-brandHovered text-[16px] h-[54px]"
              >
                Next
              </Button>
            </div>
          </form>

          {/* Privacy Policy */}
          <span className="text-xs p-1 font-thin text-woltColors-textSubdued mt-4 block">
            By pressing next, you agree to our{" "}
            <a
              href="https://explore.wolt.com/en/isr/terms"
              className="text-woltColors-brandDisabled"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://explore.wolt.com/en/isr/privacy"
              className="text-woltColors-brandDisabled"
            >
              Privacy Statement
            </a>
            .
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

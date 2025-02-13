import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "@/providers/userContext";
import { login } from "@/services/api/auth";

export default function LoginPage() {
  const { providerLogin } = useContext(userContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // Extract query parameters
  const email = searchParams.get("email") || "";

  let lastURL = searchParams.get("lasturl");
  if (lastURL) {
    lastURL = decodeURIComponent(lastURL);
  } else {
    lastURL = "404";
  }
  async function fetchUser() {
    const { user } = await login(decodeURIComponent(email));
    providerLogin(user);
    navigate(lastURL!);
  }
  fetchUser();
  return (
    <div>
      <p>fetching the user, please wait...</p>
    </div>
  );
}

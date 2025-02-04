import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "@/providers/userContext";

import axios from "axios";

export default function LoginPage() {
  const { providerLogin } = useContext(userContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // Extract query parameters
  const token = searchParams.get("token");
  let lastURL = searchParams.get("lasturl");
  if (lastURL) {
    lastURL = decodeURIComponent(lastURL);
  } else {
    lastURL = "404";
  }
  async function fetchUser() {
    const { data } = await axios.post("http://localhost:3000/auth/login", {
      token,
    });
    providerLogin(data.user);
    navigate(lastURL!);
  }
  fetchUser();
  return (
    <div>
      <p>fetching the user, please wait...</p>
    </div>
  );
}

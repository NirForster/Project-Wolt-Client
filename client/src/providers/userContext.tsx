import { createContext, useState, useEffect } from "react";
import { User } from "../services/types/types";
import { fetchCurrentUser, logout } from "../services/api/auth";

interface UserContextType {
  user: User | null;
  providerLogin: (user: User) => void;
  providerLogout: () => void;
}

export const userContext = createContext<UserContextType>({
  user: null,
  providerLogin: () => {},
  providerLogout: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch user from server on app load
  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
    };
    loadUser();
  }, []);

  const providerLogin = (user: User) => setUser(user);
  const providerLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, providerLogin, providerLogout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

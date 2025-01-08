import { createContext, useState, useEffect } from "react";
import { User } from "../types";
import { fetchCurrentUser, logout } from "../services/auth";

interface UserContextType {
  user: User | null;
  providerLogin: (user: User) => void;
  providerLogout: () => void;
}

export const UserContext = createContext<UserContextType>({
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
    <UserContext.Provider value={{ user, providerLogin, providerLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

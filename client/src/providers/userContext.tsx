import { createContext, useState, useEffect } from "react";
import { User } from "../services/types/types";
import { fetchCurrentUser, logout } from "../services/api/auth";

interface UserContextType {
  user: User | null;
  providerLogin: (user: User) => void;
  providerLogout: () => void;
  updateUser: (updatedFields: Partial<User>) => void;
}

export const userContext = createContext<UserContextType>({
  user: null,
  providerLogin: () => {},
  providerLogout: () => {},
  updateUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

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

  const updateUser = (updatedFields: Partial<User>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      return { ...prevUser, ...updatedFields };
    });
  };

  return (
    <userContext.Provider
      value={{ user, providerLogin, providerLogout, updateUser }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

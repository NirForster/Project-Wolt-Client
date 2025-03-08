import { createContext, useState, useEffect } from "react";
import { User } from "@/types/index";
import { fetchCurrentUser, logout } from "../services/api/auth";

interface UserContextType {
  user: User | null;
  providerLogin: (user: User) => void;
  providerLogout: () => void;
  updateUser: (updatedFields: Partial<User>) => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const userContext = createContext<UserContextType>({
  user: null,
  providerLogin: () => {},
  providerLogout: () => {},
  updateUser: () => {},
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
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
      value={{ user, providerLogin, providerLogout, updateUser, setUser }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

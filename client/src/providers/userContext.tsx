import { createContext, useState } from "react";
import { User } from "../types";

interface UserContextType {
  user: User | null;
  providerLogin: (user: User) => void;
  providerLogout: () => void;
}

export const userContext = createContext<UserContextType>({
  user: null,
  providerLogin: (user: User) => {
    console.log(user);
  },
  providerLogout: () => {
    console.log("hello");
  },
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  function providerLogin(user: User) {
    setUser(user);
  }
  function providerLogout() {
    setUser(null);
  }

  return (
    <userContext.Provider value={{ user, providerLogin, providerLogout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

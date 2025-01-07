import { createContext, useState } from "react"

interface UserContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
  }
  
  export const UserContext = createContext<UserContextType>({
    user: null,
    login: (user: User) => {
      console.log(user);
    },
    logout: () => {
      console.log("hello");
    },
  });
  

interface UserProviderProps {
    children: React.ReactNode
}

const userProvider = ({children}:UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  
  function providerLogin(user:User){
    setUser(user)
  }
  function providerLogout(user:User){
    setUser(null)
  }
  
    return (

    )
}

export default userProvider 

import { useRouter } from "next/router";
import React from "react";
import axios from 'axios'

type AuthResponse = {
  id: string;
  message: string;
} | null;



type AuthContextData = {
  user: string | null;
  signIn: (username: string, password:string, redirect:string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

type AuthContextProps = {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = React.useState<string|null>(null);
 
  const signIn = React.useCallback( async (username: string, password:string, redirect:string) => {
    try {
      const response = await axios.post<AuthResponse>('http://localhost:3333/api/login', {username, password});
      if(!response.data?.id)
        return false
      setUser(response.data?.id);
      router.push(redirect)
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }	
  }, [router]);
  const signOut = React.useCallback(async () => {
    setUser(null);
    router.push('/login')
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
  )
};

export const useAuth = () => React.useContext(AuthContext);
import { createContext, useState, type ReactNode } from 'react';
import {
  setAuthToken,
  removeAuthToken,
  isAuthenticated,
} from '../services/tokenService';

interface AuthContextType {
  isUserAuthenticated: boolean | null;
  login: (token: string) => void;
  logout: () => void;
  signUp: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    boolean | null
  >(isAuthenticated());

  const signUp = (token: string) => {
    setAuthToken(token);
    setIsUserAuthenticated(true);
  };

  const login = (token: string) => {
    setAuthToken(token);
    setIsUserAuthenticated(true);
  };

  const logout = () => {
    removeAuthToken();
    setIsUserAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isUserAuthenticated, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

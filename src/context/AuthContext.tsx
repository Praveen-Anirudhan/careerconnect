import { createContext, useState, type ReactNode } from 'react';
import { setAuthToken, removeAuthToken } from '../services/tokenService';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    signUp: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signUp = (token: string) => {
        setAuthToken(token);
        setIsAuthenticated(true);
    };

    const login = (token: string) => {
        setAuthToken(token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        removeAuthToken();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
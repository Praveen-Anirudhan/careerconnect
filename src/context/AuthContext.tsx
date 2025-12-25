import { createContext, useState, type ReactNode } from 'react';
import { setAuthToken, removeAuthToken } from '../services/tokenService';

interface AuthContextType {
    isAuthenticated: boolean | null;
    login: (token: string) => void;
    logout: () => void;
    signUp: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const getStoredAuth = (): boolean => {
        try {
            const stored = localStorage.getItem('isAuthenticated');
            return stored === 'true';
        } catch (error) {
            console.error('Error reading authentication state:', error);
            return false;
        }
    };

    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(getStoredAuth());

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
import { createContext, useState, useEffect, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuthToken, setAuthToken, removeAuthToken } from '../services/auth';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const verifyAuth = async () => {
            const token = getAuthToken();
            if (token) {
                setIsAuthenticated(true);
                if (location.pathname === '/login') {
                    navigate('/dashboard');
                }
            } else {
                if (location.pathname !== '/login') {
                    navigate('/login');
                }
            }
            setLoading(false);
        };

        verifyAuth();
    }, [navigate, location.pathname]);

    const login = (token: string) => {
        setAuthToken(token);
        setIsAuthenticated(true);
        navigate('/dashboard');
    };

    const logout = () => {
        removeAuthToken();
        setIsAuthenticated(false);
        navigate('/login');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
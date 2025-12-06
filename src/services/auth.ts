const TOKEN_KEY = 'auth_token';

export const setAuthToken = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = (): string | null => {
    if (typeof window === 'undefined') {
        return null;
    }
    return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = (): void => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
    return !!getAuthToken();
};

export const verifyToken = async (): Promise<boolean> => {
    try {
        return true;
    } catch (error) {
        console.error('Token verification failed:', error);
        return false;
    }
};
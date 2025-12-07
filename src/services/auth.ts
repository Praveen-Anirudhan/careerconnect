import {graphqlRequest} from '../utils/api';
import {LOGIN_MUTATION, REGISTER_MUTATION} from '../containers/api';

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

type RegisterInput = {
    email: string;
    password: string;
    role: 'RECRUITER';
};

type RegisterResponse = {
    data?: {
        register: {
            token: string;
            user: {
                id: string;
            };
        };
    };
    errors?: Array<{ message: string }>;
};

type LoginInput = {
    email: string;
    password: string;
};

type LoginResponse = {
    data?: {
        login: {
            token: string;
            user: {
                id: string;
            };
        };
    };
    errors?: Array<{ message: string }>;
};

export const register = async ({ email, password, role }: RegisterInput) => {
    const result = await graphqlRequest<RegisterInput, RegisterResponse>({
        query: REGISTER_MUTATION,
        variables: { email, password, role }
    });

    if (result.errors) {
        throw new Error(result.errors[0]?.message || 'Registration failed');
    }

    if (result.data?.register?.token) {
        setAuthToken(result.data.register.token);
        return result.data.register;
    }

    throw new Error('Registration failed: No token received');
};

export const loginUser = async ({ email, password }: LoginInput) => {
    const result = await graphqlRequest<LoginInput, LoginResponse>({
        query: LOGIN_MUTATION,
        variables: { email, password }
    });

    if (result.errors) {
        throw new Error(result.errors[0]?.message || 'Login failed');
    }

    if (result.data?.login?.token) {
        setAuthToken(result.data.login.token);
        return result.data.login;
    }

    throw new Error('Login failed: No token received');
};
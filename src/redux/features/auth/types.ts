export interface User {
    id: string;
    token: string;
    role?: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    email: string | null;
    password: string | null;
    role: string | null;
}
export interface User {
    id: string;
    role: string;
    token: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    email: string | null;
    password: string | null;
}
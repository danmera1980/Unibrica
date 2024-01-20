export interface User {
    name: string;
    email: string;
    role: string;
}

export interface AuthState {
    error: string | null;
    isLoading: boolean;
    user: User | null;
}
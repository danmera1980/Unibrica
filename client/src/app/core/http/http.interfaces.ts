export interface LoginData {
    username: string;
    password: string;
}

export interface LoginResponse extends User{
}

interface User {
    id: string;
    fistName: string;
    lastName: string;
    username: string;
    email: string;
    dob: string;
}
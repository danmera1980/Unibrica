export interface IRequest {
    date: string;
    description: string;
    comments?: string;
}

export interface IRequestType {
    description: string;
    name: string;
}

export interface IRequestState {
    description: string;
    name: string;
}
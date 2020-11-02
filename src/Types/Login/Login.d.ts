export type MODE_TYPE = 'LOGIN' | 'REGISTER';

export interface VerificationFormProps {
    username: string;
    callback: (res) => void;
}

export interface LoginFromProps {
    changeMode: (mode: MODE_TYPE) => void;
}

export interface SignupFromProps {
    changeMode: (mode: MODE_TYPE) => void;
}

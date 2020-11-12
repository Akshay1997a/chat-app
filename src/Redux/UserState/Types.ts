export const MODIFY_USER = 'MODIFY_USER';

export interface UserStateProps {
    id?: string;
    userName?: string;
    name?: string;
    status?: string;
    isVerified?: Boolean;
    isDeactive?: Boolean;
    avatar?: string;
}

export interface UserActionProps {
    type: typeof MODIFY_USER;
    payload: UserStateProps;
}

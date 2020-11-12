import { MODIFY_USER, UserStateProps } from "./Types";

export function addUser(user: UserStateProps) {
    return {
        type: MODIFY_USER,
        payload: user,
    };
}

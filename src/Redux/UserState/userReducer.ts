import { UserActionProps, UserStateProps } from './Types';

const initialState: UserStateProps = {};

function userReducer(state = initialState, action: UserActionProps) {
    switch (action.type) {
        case 'MODIFY_USER':
            return { ...state, ...action.payload };

        default:
            return state;
    }
}

export default userReducer;

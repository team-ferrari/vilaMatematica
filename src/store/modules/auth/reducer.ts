import produce from 'immer';
import { ALERTTYPE_ERROR, ALERTTYPE_WARN } from '@constants/alertType';

const INITIAL_STATE = {
    name: '',
    email: '',
    alert: {
        active: false,
        type: '',
        message: '',
    },
};

export default function personal(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGNIN_SUCCESS': {
                draft.name = action.payload.name;
                draft.email = action.payload.email;
                break;
            }
            case '@auth/SIGNOUT_SUCCESS': {
                draft.name = '';
                draft.email = '';
                break;
            }
            case '@auth/FAILED': {
                draft.alert = {
                    active: true,
                    type: ALERTTYPE_ERROR,
                    message: action.payload.message,
                };
                break;
            }
            case '@auth/ALERT': {
                draft.alert = {
                    active: true,
                    type: ALERTTYPE_WARN,
                    message: action.payload.message,
                };
                break;
            }
            case '@auth/FAILED_CHECKED': {
                draft.alert.active = false;
                break;
            }
            default:
                return state;
        }
    });
}

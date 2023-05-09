import produce from 'immer';

const INITIAL_STATE = {
    failed: false,
};

export default function sessions(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@connection/CHECK': {
                draft.failed = action.payload.failed;
                break;
            }
            default:
                return state;
        }
    });
}

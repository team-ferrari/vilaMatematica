import produce from 'immer';

const INITIAL_STATE = {
};

export default function personal(state = INITIAL_STATE, action:any) {
    return produce(state, _draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}

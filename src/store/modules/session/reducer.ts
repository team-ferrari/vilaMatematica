import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_FINGERS, SESSIONTYPE_IMAGECOUNT } from '@constants/sessionTypes';
import produce from 'immer';

const INITIAL_STATE = {
    session: null,
    activeIndex: 0,
    difficulty: '',
    types: [
        { type: SESSIONTYPE_IMAGECOUNT, possibility: 0.2 },
        { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.6 },
        { type: SESSIONTYPE_FINGERS, possibility: 0.2 },
    ],
};

export default function session(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@session/CREATE': {
                draft.difficulty = action.payload.difficulty;
                draft.activeIndex = 0;
                break;
            }
            case '@session/CREATE_SUCCESS': {
                draft.session = action.payload.session;
                break;
            }
            default:
                return state;
        }
    });
}

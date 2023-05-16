import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_FINGERS, SESSIONTYPE_IMAGECOUNT } from '@constants/sessionTypes';
import produce from 'immer';

const INITIAL_STATE = {
    session: null,
    activeIndex: 0,
    difficulty: '',
    validated: false,
    isCorrect: false,
    types: [
        { type: SESSIONTYPE_IMAGECOUNT, possibility: 0.2 },
        { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.6 },
        { type: SESSIONTYPE_FINGERS, possibility: 0.2 },
    ],
    answers: [],
};

export default function session(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@session/CREATE': {
                draft.difficulty = action.payload.difficulty;
                draft.activeIndex = 0;
                draft.answers = [];
                break;
            }
            case '@session/CREATE_SUCCESS': {
                draft.session = action.payload.session;
                break;
            }
            case '@session/SELECT_SUCCESS': {
                draft.validated = true;
                draft.isCorrect = action.payload.isCorrect;
                break;
            }
            case '@session/NEXT': {
                draft.validated = false;
                draft.isCorrect = false;
                draft.activeIndex = draft.activeIndex + 1;
                break;
            }
            case '@session/ABORT': {
                draft.validated = false;
                draft.isCorrect = false;
                draft.session = null;
                draft.answers = [];
                break;
            }
            default:
                return state;
        }
    });
}

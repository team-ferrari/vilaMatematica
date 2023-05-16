import produce from 'immer';

const INITIAL_STATE = {
    lastUnlocked: null,
    animals: {
        cat: false,
        cow: false,
        dog: false,
        elephant: false,
        panda: false,
        pig: false,
        pigeon: false,
        rabbit: false,
        sloth: false,
        tiger: false,
        toucan: false,
        whale: false,
    },
};

export default function sessions(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@animals/UNLOCK_SUCCESS': {
                let animals = Object.assign({}, draft.animals);
                animals[action.payload.animal] = true;
                draft.animals = animals;
                draft.lastUnlocked = action.payload.animal;
                break;
            }
            default:
                return state;
        }
    });
}

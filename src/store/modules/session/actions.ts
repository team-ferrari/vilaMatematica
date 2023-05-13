export function createAction({ difficulty }:any) {
    return {
        type: '@session/CREATE',
        payload: {
            difficulty,
        },
    };
}

export function createActionSuccess({ session }:any) {
    return {
        type: '@session/CREATE_SUCCESS',
        payload: {
            session,
        },
    };
}


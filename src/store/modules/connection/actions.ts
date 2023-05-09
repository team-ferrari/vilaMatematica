export function checkAction({ failed }:any) {
    return {
        type: '@connection/CHECK',
        payload: { failed },
    };
}

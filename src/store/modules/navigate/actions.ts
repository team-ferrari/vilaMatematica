export function navigateAction({ path, screen }:any) {
    return {
        type: '@navigate/NAVIGATION',
        payload: {
            path, screen,
        },
    };
}

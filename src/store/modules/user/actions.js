export function updateProfileRequest(data) {
    return {
        type: '@ser/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
}

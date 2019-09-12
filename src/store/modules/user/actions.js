export function updateProfileRequest(data) {
    return {
        type: '@ser/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
}

export function updateProfileSuccess(profile) {
    return {
        type: '@ser/UPDATE_PROFILE_SUCCESS',
        payload: { profile },
    };
}

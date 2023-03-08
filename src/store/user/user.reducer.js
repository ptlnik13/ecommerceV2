import {USER_ACTION_TYPES} from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, {type, payload}) => {

    switch (type) {
        case USER_ACTION_TYPES.FETCH_CURRENT_USER_START:
            return {
                ...state,
                isLoading: true,
            }
        case USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                currentUser: payload
            }
        case USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state
    }
}

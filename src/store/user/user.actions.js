import {createAction} from "../../utils/reducer/reducer.utils";
import {USER_ACTION_TYPES} from "./user.types";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../../utils/firebase/firebase.utils";


const fetchCurrentUserStart = () => {
    return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_START);
}

const fetchCurrentUserSuccess = (user) => {
    return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS, user);
}

const fetchCurrentUserFailed = (error) => {
    return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED, error);
}

export const fetchCurrentUserAsync = () => async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
        onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user);
            }
            dispatch(fetchCurrentUserSuccess(user));
        });
    } catch (e) {
        dispatch(fetchCurrentUserFailed(e));
    }
}
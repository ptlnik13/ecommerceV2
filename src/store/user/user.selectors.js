import {createSelector} from "reselect";

const currentUserReducer = state => state.user;


export const selectCurrentUser = createSelector(
    [currentUserReducer],
    user => user.currentUser
);

import {takeLatest, call, put, all} from 'redux-saga/effects';
import {USER_ACTION_TYPES} from "./user.types";
import {signInSuccess, signInFailed} from "./user.actions";
import {getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";


function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (e) {
        yield put(signInFailed(e));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (e) {
        yield put(signInFailed(e));
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield call(signInWithGooglePopup)
        if (!user) return;
        yield call(getSnapshotFromUserAuth, user);
    } catch (e) {
        yield put(signInFailed(e));
    }
}

function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password);
        if (!user) return;
        yield call(getSnapshotFromUserAuth, user);
    } catch (e) {
        yield put(signInFailed(e))
    }
}

function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart)])
}
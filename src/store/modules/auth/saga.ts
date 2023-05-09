import { all, put, takeLatest } from 'redux-saga/effects';

import { alertAction, failedAction, signInAction, signInSuccessAction, signOutSuccessAction } from './actions';
import { getErrorTranslationKey } from '@helpers/ErrorHandlerHelper';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { authenticate, decode, logoff, request } from '@services/api/requester';
import { API_PASSWORD_FORGOT, API_SESSION, API_USERS } from '@services/api/routes';
import { REQUESTER_POST } from '@services/api/types';
import { PATH_HOME, PATH_LOGIN } from '@services/navigation';
import { navigate } from '@services/navigation/root';

function* signIn({ payload }:any) {
    try {
        const { user, password } = payload || {};
        const response:ResponseGenerator = yield request({
            type: REQUESTER_POST,
            method: API_SESSION,
            data: {
                email: user,
                password: password,
            },
            authNeeded: false,
        });

        const { token, refreshToken } = response.data;
        const { name, email } = decode(token);

        yield authenticate({ token, refreshToken });
        yield put(signInSuccessAction({ name, email }));
    } catch (error:any) {
        yield put(failedAction({ message: getErrorTranslationKey(error.message) }));
    }
}

function* signUp({ payload }:any) {
    try {
        const { fullName, user, password } = payload || {};
        yield request({
            type: REQUESTER_POST,
            method: API_USERS,
            data: {
                name: fullName,
                email: user,
                password: password,
            },
            authNeeded: false,
        });

        yield put(signInAction({ user, password }));
    } catch (error:any) {
        yield put(failedAction({ message: getErrorTranslationKey(error.message) }));
    }
}

function* signInSuccess() {
    yield navigate(RouteOptions.main, { screen: PATH_HOME });
}

function* signOut() {
    yield logoff();
    yield put(signOutSuccessAction());
}

function* signOutSuccess() {
    yield navigate(RouteOptions.auth, { screen: PATH_LOGIN });
}

function* forgotPassword({ payload }:any) {
    try {
        const { user } = payload || {};
        yield request({
            type: REQUESTER_POST,
            method: API_PASSWORD_FORGOT,
            data: {
                email: user,
            },
            authNeeded: false,
        });
        yield put(alertAction({ message: 'auth.recoverPasswordContent' }));
    } catch (error:any) {
        yield put(failedAction({ message: getErrorTranslationKey(error.message) }));
    }
}

export default all([
    takeLatest('@auth/SIGNIN', signIn),
    takeLatest('@auth/SIGNIN_SUCCESS', signInSuccess),
    takeLatest('@auth/SIGNUP', signUp),
    takeLatest('@auth/SIGNOUT', signOut),
    takeLatest('@auth/SIGNOUT_SUCCESS', signOutSuccess),
    takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
]);

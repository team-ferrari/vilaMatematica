import jwt_decode from 'jwt-decode';
import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '.';
import { verifyToken } from './validation';
import { ERROR_TOKENNOTFOUND, ERR_NETWORK } from '@constants/errorMessage';
import { RequesterProps } from '@interfaces/api/RequesterProps';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { TokensProps } from '@interfaces/auth/TokensProps';
import { HttpError } from '@interfaces/errors/HttpError';
import { LS_REFRESHTOKEN, LS_TOKEN } from '@services/storage';
import { PATH_LOGIN } from '@services/navigation';
import { navigate } from '@services/navigation/root';
import { checkAction } from '@store/modules/connection/actions';
import { STATUS_UNAUTHORIZED } from '@constants/statusCode';

export function* request({ type, method, data, authNeeded = true }:RequesterProps):any {
    const action = getByType(type);
    if (!action) {return;}

    try {
        if (authNeeded) {
            yield call(verifyToken);
        }

        const response = yield call(action, method, data);
        return response;
    } catch (e) {
        return yield validateError(e, authNeeded);
    }
}

export function getByType(type:string) {
    return api[type];
}

export function* validateError(e:any, authNeeded:boolean) {
    if (e.code === ERR_NETWORK) {
        yield put(checkAction({ failed: true }));
    }

    if (authNeeded &&
        (e.message === ERROR_TOKENNOTFOUND || e.status === STATUS_UNAUTHORIZED)
    ) {
        navigate(RouteOptions.auth, { screen: PATH_LOGIN });
    }

    const message = e?.response?.data?.error;
    throw new HttpError(message, e.status);
}

export function* authenticate({ token, refreshToken }:TokensProps) {
    AsyncStorage.setItem(LS_TOKEN, token);
    AsyncStorage.setItem(LS_REFRESHTOKEN, refreshToken);

    api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function* logoff() {
    AsyncStorage.removeItem(LS_TOKEN);
    AsyncStorage.removeItem(LS_REFRESHTOKEN);

    api.defaults.headers.Authorization = '';
}

export function decode(token:string) {
    const decoded = jwt_decode(token);
    const { name, email } = decoded || {} as any;

    return {
        name, email,
    };
}

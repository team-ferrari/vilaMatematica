import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

import { REQUESTER_POST } from './types';
import { API_REFRESHTOKEN } from './routes';
import { ERROR_TOKENNOTFOUND } from '../../constants/errorMessage';
import { LS_REFRESHTOKEN, LS_TOKEN } from '@services/storage';
import { authenticate, request } from './requester';
import api from '.';
import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';

function* verifyToken() {
    const token:string = yield AsyncStorage.getItem(LS_TOKEN);
    if (!token) {
        throw new Error(ERROR_TOKENNOTFOUND);
    }

    const expiresAt = getExpiresAt(token);
    const isExpired = expiresAt > Date.now() ? true : false;
    const refreshToken:string = yield AsyncStorage.getItem(LS_REFRESHTOKEN);

    if (isExpired) {
        const renewedToken:string = yield renewToken(refreshToken);
        yield AsyncStorage.setItem(LS_TOKEN, renewedToken);
    }

    yield setApiToken();
}

async function setApiToken() {
    const token = await AsyncStorage.getItem(LS_TOKEN);
    api.defaults.headers.Authorization = `Bearer ${token}`;
}

function getExpiresAt(token:string) {
    const obj = jwt_decode(token) as any;
    return obj ? obj.exp : null;
}

function* renewToken(refreshToken:any) {
    try {
        const response:ResponseGenerator = yield request({
            type: REQUESTER_POST,
            method: API_REFRESHTOKEN,
            data: {
                token: refreshToken,
            },
            authNeeded: false,
        });

        const { token, refreshToken:newRefreshToken } = response.data;
        yield authenticate({ token, refreshToken: newRefreshToken });

        return token;
    } catch (e) {
    }
}

export {
    verifyToken,
    renewToken,
};

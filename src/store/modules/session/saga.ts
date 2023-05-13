import { generateNewSession } from '@helpers/SessionHelper';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { PATH_ACTIVITY } from '@services/navigation';
import { navigate } from '@services/navigation/root';
import { all, put, takeLatest } from 'redux-saga/effects';

import { createActionSuccess } from './actions';

function* create({ payload }:any) {
    const { difficulty } = payload;
    const session = generateNewSession(difficulty);
    yield put(createActionSuccess({ session }));
}

function* createSuccess() {
    navigate(RouteOptions.activities, { screen: PATH_ACTIVITY });
}

export default all([
    takeLatest('@session/CREATE', create),
    takeLatest('@session/CREATE_SUCCESS', createSuccess),
]);

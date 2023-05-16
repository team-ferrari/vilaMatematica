import { generateNewSession, isCorrectAnswer, isSuccessedSession } from '@helpers/SessionHelper';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { PATH_ACTIVITY, PATH_ACTIVITY_FINISHED, PATH_HOME } from '@services/navigation';
import { navigate } from '@services/navigation/root';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { unlockAction } from '../animals/actions';

import { createActionSuccess, nextAction, selectSuccessAction } from './actions';
import * as selectors from './selectors';

function* create({ payload }:any) {
    const { difficulty } = payload;
    const session = generateNewSession(difficulty);
    yield put(createActionSuccess({ session }));
}

function* createSuccess() {
    navigate(RouteOptions.activities, { screen: PATH_ACTIVITY });
}

function* selectOption({ payload }:any) {
    const { option } = payload;
    const { session, activeIndex } = yield select(selectors.session);

    const isCorrect = isCorrectAnswer(session, activeIndex, option);
    yield put(selectSuccessAction({ isCorrect }));
}

function* selectSuccess() {
    yield new Promise(resolve => setTimeout(() => {
        resolve(true);
    }, 3000));
    yield put(nextAction());
}

function* nextOption() {
    const { session, activeIndex, correctAnswer } = yield select(selectors.session);

    if (!session || session.length > activeIndex) {
        return;
    }

    if (isSuccessedSession(session.length, correctAnswer)) {
        yield put(unlockAction());
    }

    navigate(RouteOptions.activities, { screen: PATH_ACTIVITY_FINISHED });
}

function* abort() {
    navigate(RouteOptions.main, { screen: PATH_HOME });
}

export default all([
    takeLatest('@session/CREATE', create),
    takeLatest('@session/CREATE_SUCCESS', createSuccess),
    takeLatest('@session/SELECT_OPTION', selectOption),
    takeLatest('@session/SELECT_SUCCESS', selectSuccess),
    takeLatest('@session/NEXT', nextOption),
    takeLatest('@session/ABORT', abort),
]);

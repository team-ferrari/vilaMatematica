import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import difficulties from './difficulties/saga';
import navigate from './navigate/saga';
import session from './session/saga';

export default function* rootSaga():any {
    return yield all([
        auth,
        difficulties,
        navigate,
        session,
    ]);
}

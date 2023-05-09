import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import navigate from './navigate/saga';

export default function* rootSaga():any {
    return yield all([
        auth,
        navigate,
    ]);
}

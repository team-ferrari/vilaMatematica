
import { navigationRef } from '@services/navigation/root';
import { all,  takeLatest } from 'redux-saga/effects';

function* navigation({ payload }:any) {
    const { path, screen } = payload || {};
    navigationRef.current?.navigate(path, { screen });
}

export default all([
    takeLatest('@navigate/NAVIGATION', navigation),
]);

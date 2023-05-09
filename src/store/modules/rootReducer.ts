import { combineReducers } from 'redux';
import auth from './auth/reducer';
import navigate from './navigate/reducer';

export const rootReducer = combineReducers({
    auth,
    navigate,
});

export type RootState = ReturnType<typeof rootReducer>

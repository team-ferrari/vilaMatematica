import { combineReducers } from 'redux';

import auth from './auth/reducer';
import difficulties from './difficulties/reducer';
import navigate from './navigate/reducer';
import session from './session/reducer';

export const rootReducer = combineReducers({
    auth,
    difficulties,
    navigate,
    session,
});

export type RootState = ReturnType<typeof rootReducer>

import { combineReducers } from 'redux';

import animals from './animals/reducer';
import auth from './auth/reducer';
import difficulties from './difficulties/reducer';
import navigate from './navigate/reducer';
import session from './session/reducer';

export const rootReducer = combineReducers({
    auth,
    animals,
    difficulties,
    navigate,
    session,
});

export type RootState = ReturnType<typeof rootReducer>

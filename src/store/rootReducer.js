import {combineReducers} from 'redux';
// import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {createBlacklistFilter } from 'redux-persist-transform-filter';

import {signUpReducer} from '../pages/SignUpPage/reducers/index';
import {signInReducer} from '../pages/LogInPage/reducers/index';

// const authBlackListedFields = createBlacklistFilter('signIn', ['isLoading', 'errors']);

// const persistConfig = {
//     key: 'root',
//     storage,
//     whiteList: ['signIn'],
//     transforms: authBlackListedFields
// };

export const rootReducer = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer
});

// export default persistReducer(persistConfig, rootReducer)
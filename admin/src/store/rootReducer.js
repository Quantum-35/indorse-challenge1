import { combineReducers } from 'redux';

import signupReducer from '../components/Signup/reducer';
import loginReducer from '../components/Login/reducer';

export default combineReducers({
    signupReducer,
    loginReducer
});
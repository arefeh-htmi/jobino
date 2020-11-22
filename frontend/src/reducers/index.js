import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userprofileReducer from './userprofileReducer';

export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    profile:userprofileReducer
})


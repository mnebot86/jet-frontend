import { combineReducers } from '@reduxjs/toolkit';
import alertReducer from '../slices/alert';
import userReducer from '../slices/user';
import groupReducer from '../slices/group';

const rootReducer = combineReducers({
	alert: alertReducer,
	user: userReducer,
	group: groupReducer,
});

export default rootReducer;

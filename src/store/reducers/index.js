import { combineReducers } from '@reduxjs/toolkit';
import toastReducer from '../slices/toast';
import userReducer from '../slices/user';
import groupReducer from '../slices/group';

const rootReducer = combineReducers({
	toast: toastReducer,
	user: userReducer,
	group: groupReducer,
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import alertReducer from '../slices/alert';

const rootReducer = combineReducers({
	alert: alertReducer,
});

export default rootReducer;

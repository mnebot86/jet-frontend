import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hasError: false,
	message: '',
};

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		setAlert: (state, action) => {
			state.hasError = action.payload.hasError;
			state.message = action.payload.message;
		},
		clearAlert: (state) => {
			state.hasError = false;
			state.message = '';
		},
	},
});

export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;

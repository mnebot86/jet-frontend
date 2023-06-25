import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
	message: '',
	messageType: null,
};

const toastSlice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		openToast: (state, { payload }) => {
			state.isOpen = true;
			state.message = payload.message;
			state.messageType = payload.messageType;
		},
		closeToast: (state) => {
			state.isOpen = false;
			state.message = '';
		},
	},
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;

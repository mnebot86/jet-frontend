import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	groups: [],
};

const groupSlice = createSlice({
	name: 'group',
	initialState,
	reducers: {
		setGroups: (state, action) => {
			state.groups = action.payload;
		},
	},
});

export const { setGroups } = groupSlice.actions;

export default groupSlice.reducer;

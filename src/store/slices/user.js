import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isSignedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isSignedIn = true;
		},
		setSignedIn: (state) => {
			state.isSignedIn = true;
		},
		clearUser: (state) => {
			state.user = null;
			state.isSignedIn = false;
		},
		setUserPlayer: (state, action) => {
			state.user.players = [...state.user.players, action.payload];
		},
		setUserPlayerAvatar: (state, action) => {
			const { id, avatar } = action.payload;

			const updatedPlayers = state.user.players.map((player) =>
				player._id === id ? { ...player, avatar } : player
			);

			state.user.players = updatedPlayers;
		},
	},
});

export const {
	setUser,
	clearUser,
	setSignedIn,
	setUserPlayer,
	setUserPlayerAvatar,
} = userSlice.actions;

export default userSlice.reducer;

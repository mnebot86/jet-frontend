import { createSelector } from '@reduxjs/toolkit';

export const userSlice = (state) => state.user;

export const getSignedIn = createSelector(
	userSlice,
	(state) => state.isSignedIn
);

export const getUserId = createSelector(userSlice, (state) => {
	state?.user?._id;
});

export const getUserRole = createSelector(
	userSlice,
	(state) => state?.user?.role
);

export const getRoster = createSelector(
	userSlice,
	(state) => state.user?.groups[0]?.roster
);

export const getGames = createSelector(
	userSlice,
	(state) => state.user?.groups[0]?.games
);

export const getNextGame = createSelector(getGames, (games) => {
	if (!games) return;

	const currentDateTime = new Date();

	const upcomingGames = games?.filter((game) => {
		new Date(game?.dateTime) > currentDateTime;
	});

	return upcomingGames?.length > 0 ? upcomingGames[0] : null;
});

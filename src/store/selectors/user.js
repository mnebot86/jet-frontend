import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';

export const currentUser = (state) => state.user;

export const getSignedIn = createSelector(
	currentUser,
	(state) => state.isSignedIn
);

export const getUserId = createSelector(currentUser, (state) => {
	get(state, 'user._id');
});

export const getUserRole = createSelector(currentUser, (state) =>
	get(state, 'user.role')
);

export const getPlayers = createSelector(currentUser, (state) =>
	get(state, 'user.players', [])
);

export const getGames = createSelector(currentUser, (state) =>
	get(state, 'user.groups[0].games')
);

export const getNextGame = createSelector(getGames, (games) => {
	if (!games) return;

	const currentDateTime = new Date();

	const upcomingGames = games?.filter((game) => {
		new Date(game?.dateTime) > currentDateTime;
	});

	return upcomingGames?.length > 0 ? upcomingGames[0] : null;
});

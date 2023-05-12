import { createSelector } from '@reduxjs/toolkit';

export const groupSlice = (state) => state.group || [];

export const getGroupNamesAndIds = createSelector(groupSlice, (state) => {
	if (state.groups.length < 1) {
		return [];
	}

	return Object.keys(state.groups).map((groupId) => ({
		id: state.groups[groupId]._id,
		name: state.groups[groupId].name,
		min: state.groups[groupId].ages.min,
		max: state.groups[groupId].ages.max,
	}));
});

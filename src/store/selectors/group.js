import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';
export const groupSlice = (state) => state.group || [];

export const getGroupNamesAndIds = createSelector(groupSlice, (state) => {
	if (state.groups.length < 1) {
		return [];
	}

	return Object.keys(get(state, 'groups.data')).map((groupId) => ({
		id: get(state, `groups.data[${groupId}]._id`),
		name: get(state, `groups.data[${groupId}].name`),
		min: get(state, `groups.data[${groupId}].ages.min`),
		max: get(state, `groups.data[${groupId}].ages.max`),
	}));
});

import { server } from './apiConfig';

export const getGroup = async (id) => {
	try {
		const res = await server.post(`/groups/${id}`);

		return res.data;
	} catch (error) {
		const { response } = error;
		if (response && response.data && response.data.error) {
			return response.data;
		} else {
			return error.message;
		}
	}
};

export const getGroups = async () => {
	try {
		const res = await server.get('/groups');

		return res.data;
	} catch (error) {
		const { response } = error;
		if (response && response.data && response.data.error) {
			return response.data;
		} else {
			return error.message;
		}
	}
};

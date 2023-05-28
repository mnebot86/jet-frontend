import { server } from './apiConfig';
import { getAuthToken } from 'services/auth';

export const getGroup = async (id) => {
	try {
		const token = await getAuthToken();

		const headers = {
			Authorization: `Bearer ${token}`,
		};

		const res = await server.get(`/groups/${id}`, { headers });

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
		const token = await getAuthToken();

		const headers = {
			Authorization: `Bearer ${token}`,
		};

		const res = await server.get('/groups', { headers });

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

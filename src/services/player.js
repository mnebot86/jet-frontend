import { server } from './apiConfig';
import { getAuthToken } from 'services/auth';

export const addPlayer = async (data) => {
	try {
		const token = await getAuthToken();
		const headers = {
			Authorization: `Bearer ${token}`,
		};

		const res = await server.post('/players', data, { headers });

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

export const getPlayer = async (id) => {
	try {
		const token = await getAuthToken();
		const headers = {
			Authorization: `Bearer ${token}`,
		};

		const res = await server.get(`/players/${id}`, { headers });

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

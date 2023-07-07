import { server } from './apiConfig';
import { getAuthToken } from 'services/auth';

export const createFeedPost = async (data) => {
	try {
		const token = await getAuthToken();
		const headers = {
			Authorization: `Bearer ${token}`,
		};

		const res = await server.post('/feedPosts', data, { headers });

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

export const getFeedPosts = async () => {
	try {
		const token = await getAuthToken();
		const headers = {
			Authorization: `Bearer ${token}`,
		};

		const res = await server.get('/feedPosts', { headers });

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

import { server } from './apiConfig';

export const register = async (data) => {
	try {
		const res = await server.post('auth/register', { data });
		return res;
	} catch (error) {
		console.error(error);

		return error;
	}
};

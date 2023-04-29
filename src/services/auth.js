import { server } from './apiConfig';
import * as SecureStore from 'expo-secure-store';

export const setAuthToken = async (token) => {
	try {
		await SecureStore.setItemAsync('accessToken', token);
	} catch (error) {
		console.log(error);
	}
};

export const getAuthToken = async () => {
	try {
		const token = await SecureStore.getItemAsync('accessToken');
		return token;
	} catch (error) {
		console.log(error);
	}
};

export const deleteAuthToken = async () => {
	try {
		await SecureStore.deleteItemAsync('accessToken');
	} catch (error) {
		console.log(error);
	}
};

export const register = async (data) => {
	try {
		const res = await server.post('/auth/register', data);

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

export const login = async (data) => {
	try {
		const res = await server.post('/auth/login', data);

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

export const verifyUser = async (token) => {
	return await server
		.post('/auth/verifyUser', { token })
		.then((res) => res.data);
};

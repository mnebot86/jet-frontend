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
	return await server.post('/auth/register', data).then((res) => res.data);
};

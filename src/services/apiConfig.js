import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// console.log(process.env.REACT_APP_BASE_URL);

// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const server = axios.create({
	baseURL: BASE_URL,
});

export const setAuthToken = async (token) => {
	try {
		await AsyncStorage.setItem('userToken', token);
	} catch (error) {
		console.log(error);
	}
};

export const getAuthToken = async () => {
	try {
		const token = await AsyncStorage.getItem('userToken');
		return token;
	} catch (error) {
		console.log(error);
	}
};

export const clearAuthToken = async () => {
	try {
		await AsyncStorage.removeItem('userToken');
	} catch (error) {
		console.log(error);
	}
};

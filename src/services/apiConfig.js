import axios from 'axios';
import { REACT_APP_BASE_URL_IOS } from '@env';

const BASE_URL = REACT_APP_BASE_URL_IOS;

console.log(BASE_URL);

export const server = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

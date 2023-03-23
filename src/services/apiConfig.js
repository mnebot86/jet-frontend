import axios from 'axios';
import { REACT_APP_BASE_URL } from '@env';

const BASE_URL = REACT_APP_BASE_URL;

export const server = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

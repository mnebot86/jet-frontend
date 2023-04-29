import { server } from './apiConfig';

export const upLoadAvatar = async (formData, onUploadProgress) => {
	try {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'multipart/form-data',
		};

		const res = await server.post(`/avatar`, formData, {
			headers,
			onUploadProgress,
		});

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

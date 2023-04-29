export const formatDateAndTime = (dataString) => {
	const dateObj = new Date(dataString);
	const date = dateObj.toLocaleDateString();
	const time = dateObj.toLocaleTimeString();
	return { date, time };
};

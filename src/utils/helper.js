export const formatDateAndTime = (dataString) => {
	const dateObj = new Date(dataString);
	const date = dateObj.toLocaleDateString();
	const time = dateObj.toLocaleTimeString();
	return { date, time };
};

export const calculateAge = (birthday) => {
	const birthDate = new Date(birthday);

	const currentDate = new Date();

	let age = currentDate.getFullYear() - birthDate.getFullYear();

	const birthMonth = birthDate.getMonth();
	const currentMonth = currentDate.getMonth();

	if (currentMonth < birthMonth) {
		age--;
	} else if (currentMonth === birthMonth) {
		const birthDay = birthDate.getDate();
		const currentDay = currentDate.getDate();

		if (currentDay < birthDay) {
			age--;
		}
	}

	return age.toString();
};

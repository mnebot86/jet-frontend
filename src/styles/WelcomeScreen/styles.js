import { StyleSheet } from 'react-native';
import { gold } from 'styles/colors';
import { global } from 'styles/globalStyles';

export const WelcomeScreenStyles = (theme) =>
	StyleSheet.create({
		container: {
			...global.container,
			alignItems: 'center',
			justifyContent: 'space-evenly',
			backgroundColor: theme.primaryBackground,
		},
		image: {
			...global.image,
		},
		header: {
			...global.header,
			color: theme.primaryText,
		},
		accent: {
			color: gold,
			textTransform: 'capitalize',
		},
		btnContainer: {
			width: '100%',
			flexDirection: 'row',
			marginTop: 50,
			justifyContent: 'space-around',
			gap: 5,
		},
	});

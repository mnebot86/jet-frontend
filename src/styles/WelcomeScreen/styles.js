import { StyleSheet } from 'react-native';
import { gold } from 'styles/colors';
import { global } from 'styles/globalStyles';

export const WelcomeScreenStyles = (theme) =>
	StyleSheet.create({
		container: {
			...global.container,
			alignItems: 'center',
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
			width: '50%',
			flexDirection: 'row',
			marginTop: 50,
			justifyContent: 'center',
		},
		btn: {
			paddingVertical: 10,
			paddingHorizontal: 20,
		},
		btnActive: {
			backgroundColor: 'yellow',
		},
	});

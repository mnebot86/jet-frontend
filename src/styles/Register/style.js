import { StyleSheet } from 'react-native';
import { global } from 'styles/globalStyles';

export const RegisterScreenStyles = (theme) =>
	StyleSheet.create({
		container: {
			...global.container,
			paddingTop: 16,
			backgroundColor: theme.primaryBackground,
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		header: {
			...global.header,
			color: theme.primaryText,
			marginBottom: 24,
		},
		subHeader: {
			...global.subHeader,
			color: theme.primaryText,
		},
		btnContainer: {
			width: '100%',
		},
		checkBoxContainer: {
			flexDirection: 'row',
			width: '100%',
			justifyContent: 'space-around',
		},
	});

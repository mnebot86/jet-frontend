import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		maxWidth: 350,
	},
	subHeader: {
		fontSize: 28,
		maxWidth: 350,
		fontWeight: '600',
		textAlign: 'center',
	},
	sectionTitles: {
		fontSize: 25,
		fontWeight: '600',
	},
	image: {
		width: '100%',
	},
	errorContainer: {
		borderWidth: 2,
		padding: 20,
		// borderRadius: 5,
		borderColor: 'red',
		borderStyle: 'solid',
		width: '100%',
	},
	errorText: {
		fontSize: 14,
		fontWeight: '500',
		color: 'red',
	},
	label: {},
});

import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	header: {
		fontSize: 36,
		fontWeight: 'bold',
		textAlign: 'center',
		maxWidth: 350,
	},
	subHeader: {
		fontSize: 28,
		maxWidth: 350,
		fontWeight: 600,
		textAlign: 'center',
	},
	image: {
		width: '100%',
	},
});

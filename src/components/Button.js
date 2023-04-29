import React from 'react';
import { useTheme } from 'styled-components';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress }) => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		btn: {
			backgroundColor: theme.primaryButtonColor,
			paddingVertical: 20,
			paddingHorizontal: 40,
			borderRadius: 24,
			flexGrow: 1,
		},
		btnText: {
			color: theme.primaryButtonText,
			fontWeight: '700',
			textAlign: 'center',
		},
	});

	return (
		<TouchableOpacity style={styles.btn} onPress={onPress}>
			<Text style={styles.btnText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;

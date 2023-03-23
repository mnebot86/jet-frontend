import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useTheme } from 'styled-components';

const Input = ({
	placeholder,
	placeholderTextColor,
	value,
	onChangeText,
	autoCapitalize,
	secureTextEntry,
	keyboardType,
}) => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		input: {
			backgroundColor: theme.primaryInputBackgroundColor,
			borderRadius: 8,
			borderWidth: 1,
			borderColor: theme.primaryInputBorderColor,
			paddingVertical: 12,
			paddingHorizontal: 16,
			fontSize: 16,
			color: theme.primaryInputTextColor,
			marginVertical: 8,
			width: 300,
		},
	});

	return (
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			placeholderTextColor={placeholderTextColor}
			value={value}
			onChangeText={onChangeText}
			autoCapitalize={autoCapitalize}
			secureTextEntry={secureTextEntry}
			keyboardType={keyboardType}
		/>
	);
};

export default Input;

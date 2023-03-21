import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useTheme } from 'styled-components';

const CheckBox = ({ value, title, onValueChange, selected }) => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		checkboxWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		checkbox: {
			marginVertical: 15,
			marginRight: 8,
		},
		text: {
			fontSize: 18,
			color: theme.primaryText,
		},
	});

	return (
		<View style={styles.checkboxWrapper}>
			<Checkbox
				style={styles.checkbox}
				value={selected === value}
				onValueChange={onValueChange}
				color={
					selected === value ? theme.primaryCheckMarkColor : undefined
				}
			/>

			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

export default CheckBox;

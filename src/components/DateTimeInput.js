import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Appearance } from 'react-native';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateTimeInput = ({ birthday, setBirthday }) => {
	const theme = useTheme();

	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const colorScheme = Appearance.getColorScheme();

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleDateConfirm = (date) => {
		hideDatePicker();
		setBirthday(date);
	};

	const dateFormat = (value) => {
		return moment(value).format('MM / DD / YYYY');
	};

	const styles = StyleSheet.create({
		dateBtn: {
			color: 'blue',
			fontWeight: '700',
		},
		date: {
			textAlign: 'center',
			fontSize: 18,
			marginTop: 10,
			color: theme.primaryText,
		},
		dateContainer: {
			backgroundColor: theme.primaryBackground,
		},
	});

	return (
		<View>
			<TouchableOpacity onPress={showDatePicker}>
				<Text style={styles.dateBtn}>Select date</Text>
			</TouchableOpacity>

			<Text style={styles.date}>
				{dateFormat(birthday.toISOString())}
			</Text>

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleDateConfirm}
				onCancel={hideDatePicker}
				textColor={theme.primaryText}
				isDarkModeEnabled={colorScheme === 'dark'}
			/>
		</View>
	);
};

export default DateTimeInput;

import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateTimeInput = () => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleDateConfirm = (date) => {
		hideDatePicker();
		setSelectedDate(date);
	};

	const dateFormat = (value) => {
		return moment(value).format('MM / DD / YYYY');
	};

	return (
		<View>
			{!selectedDate ? (
				<Text>{dateFormat(selectedDate.toISOString())}</Text>
			) : (
				<Text>Select Date</Text>
			)}

			<Button title="Select date" onPress={showDatePicker} />

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleDateConfirm}
				onCancel={hideDatePicker}
			/>
		</View>
	);
};

export default DateTimeInput;

const styles = StyleSheet.create({});

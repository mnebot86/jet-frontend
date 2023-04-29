import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeArea, Input, DateTimeInput, CheckBox } from 'components';
import { global } from 'styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { getGroupNamesAndIds } from 'store/selectors/group';
import AvatarUpload from '../SettingsScreen/AvatarUpload';

const RegistrationScreen = () => {
	const groups = useSelector(getGroupNamesAndIds);
	console.log(groups);

	const [ageGroup, setAgeGroup] = useState('');

	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		caption: {
			fontSize: 18,
			marginTop: 20,
			marginBottom: 30,
		},
		selectContainer: {
			padding: 16,
			backgroundColor: '#fff',
			width: '100%',
		},
		select: {
			borderWidth: 1,
			borderColor: '#ccc',
			borderRadius: 4,
		},
		selectItem: {
			fontSize: 16,
			color: '#000',
		},
		inputContainer: {
			marginBottom: 20,
		},
	});

	return (
		<SafeArea style={styles.container}>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
				<Text style={styles.caption}>
					Registration fees are non-refundable
				</Text>

				<AvatarUpload />

				<View>
					<View style={styles.inputContainer}>
						<Text>First Name</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Last Name</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>School</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Grade</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Birthday</Text>
						<DateTimeInput />
					</View>
				</View>

				<View style={styles.caption}>
					<Text>Upload Report Card</Text>
				</View>

				<View>
					<Text>Contact Details</Text>

					<View style={styles.inputContainer}>
						<Text>Address</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>City / Town</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>State</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Zip</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Phone</Text>
						<Input />
					</View>
				</View>

				<View>
					<Text style={styles.caption}>Allow Child to Login?</Text>
					<View>
						<Text style={styles.inputContainer}>Child Email</Text>
						<Input />
					</View>
				</View>

				<View>
					<Text>Medical</Text>

					<View style={styles.inputContainer}>
						<Text>Allergies</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Medical Conditions</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Doctor Name</Text>
						<Input />
					</View>
					<View style={styles.inputContainer}>
						<Text>Doctor Phone Number</Text>
						<Input />
					</View>
				</View>

				<View>
					<View style={styles.inputContainer}>
						<Text>Football</Text>
						<CheckBox />
					</View>

					<View style={styles.inputContainer}>
						<Text>Cheerleading</Text>
						<CheckBox />
					</View>
				</View>

				<View style={styles.selectContainer}>
					<Text style={styles.label}>Select an option:</Text>
					<Picker
						mode="dialog"
						style={styles.select}
						itemStyle={styles.selectItem}
						selectedValue={ageGroup}
						selectionColor="red"
						numberOfLines="1"
						onValueChange={(itemValue, itemIndex) =>
							setAgeGroup(itemValue)
						}>
						{groups.map((group, idx) => (
							<Picker.Item
								key={`group-${idx}`}
								label={group.name}
								value={group.id}
							/>
						))}
					</Picker>
				</View>
			</ScrollView>
		</SafeArea>
	);
};

export default RegistrationScreen;

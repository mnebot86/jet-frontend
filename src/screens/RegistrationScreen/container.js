import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { get } from 'lodash';
import { SafeArea, Input, DateTimeInput, CheckBox } from 'components';
import AvatarUpload from 'components/AvatarUpload';
import { setUserPlayer } from 'store/slices/user';
import { getGroupNamesAndIds } from 'store/selectors/group';
import { addPlayer } from 'services/player';
import { calculateAge } from 'utils/helper';

const RegistrationScreen = () => {
	const dispatch = useDispatch();
	const groups = useSelector(getGroupNamesAndIds);
	const theme = useTheme();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [school, setSchool] = useState('');
	const [grade, setGrade] = useState('');
	const [birthday, setBirthday] = useState(new Date());
	const [age, setAge] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [allergies, setAllergies] = useState('');
	const [medical, setMedical] = useState('');
	const [doctorName, setDoctorName] = useState('');
	const [doctorPhone, setDoctorPhone] = useState('');
	const [playerType, setPlayerType] = useState('FOOTBALL_PLAYER');
	const [group, setGroup] = useState();
	const [playerId, setPlayerId] = useState(null);
	const [step, setStep] = useState(1);
	const [disable, setDisable] = useState(true);

	const filterGroups = (groups, playerType, age) => {
		return groups.filter((group) => {
			const isInAgeRange = group.min <= age && group.max >= age;

			if (playerType === 'CHEERLEADER') {
				return group.name.includes('Cheer') && isInAgeRange;
			} else {
				return !group.name.includes('Cheer') && isInAgeRange;
			}
		});
	};

	const filteredGroups = useMemo(() => {
		return filterGroups(groups, playerType, age);
	}, [groups, playerType, age]);

	const handleCheckboxChange = useCallback((option) => {
		switch (option) {
			case 'CHEERLEADER':
				setPlayerType('CHEERLEADER');

				break;
			default:
				setPlayerType('FOOTBALL_PLAYER');

				break;
		}
	}, []);

	const handleSubmitPlayer = () => {
		const player = {
			firstName,
			lastName,
			school,
			grade,
			birthday,
			age,
			street,
			city,
			state,
			zip,
			phoneNumber,
			allergies: !!allergies ? allergies.split(', ') : [],
			medicalConditions: !!medical ? medical.split(', ') : [],
			role: playerType,
			group,
			doctorName,
			doctorNumber: doctorPhone,
		};

		addPlayer(player).then((res) => {
			const playerId = get(res, 'data.player._id');

			dispatch(setUserPlayer(get(res, 'data.player')));

			setPlayerId(playerId);
		});

		setStep((prev) => prev + 1);
	};

	const disableBtn = () => {
		if (
			!firstName ||
			!lastName ||
			!school ||
			!grade ||
			!street ||
			!city ||
			!state ||
			!city ||
			!state ||
			!zip ||
			!phoneNumber ||
			!playerType ||
			!doctorName ||
			!doctorPhone
		) {
			setDisable(true);
		} else {
			setDisable(false);
		}
	};

	const handleComplete = () => {
		setFirstName('');
		setLastName('');
		setSchool('');
		setGrade('');
		setBirthday(new Date());
		setAge('');
		setStreet('');
		setCity('');
		setState('');
		setZip('');
		setPhoneNumber('');
		setAllergies('');
		setMedical('');
		setPlayerType('');
		setGroup('');
		setDoctorName('');
		setDoctorPhone('');

		setStep((prev) => prev - 1);
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.primaryBackground,
		},
		caption: {
			fontSize: 18,
			marginTop: 30,
			marginBottom: 40,
			color: theme.primaryText,
		},
		label: {
			color: theme.primaryText,
			marginBottom: 6,
		},
		selectContainer: {
			width: 300,
			padding: 16,
		},
		selectItem: {
			fontSize: 16,
			fontWeight: '600',
			marginTop: 8,
			textAlign: 'center',
		},
		inputContainer: {
			marginBottom: 20,
		},
		checkBoxContainer: {
			width: 300,
			paddingHorizontal: 16,
			justifyContent: 'flex-start',
		},
		checkBoxWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		avatarWrapper: {
			width: '100%',
			minHeight: '100%',
			justifyContent: 'space-around',
		},
		birthdayMessage: {
			fontSize: 18,
			marginVertical: 10,
			color: theme.primaryText,
		},
		submitBtnWrapper: {
			paddingBottom: 20,
		},
	});

	const handleAge = () => {
		const calcAge = calculateAge(birthday);

		if (calcAge === '0') {
			setAge('');
		} else {
			setAge(calculateAge(birthday));
		}
	};

	useEffect(() => {
		handleAge();

		setGroup(filteredGroups[0]?.id);
	}, [birthday, filteredGroups]);

	useEffect(() => {
		disableBtn();
	}, [
		firstName,
		lastName,
		school,
		grade,
		street,
		city,
		state,
		city,
		state,
		zip,
		phoneNumber,
		playerType,
		doctorName,
		doctorPhone,
	]);

	const handleBackButton = useCallback(() => {
		setStep((prev) => prev - 1);
	}, []);

	return (
		<SafeArea style={styles.container}>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
				<Text style={styles.caption}>
					Registration fees are non-refundable
				</Text>

				{step === 1 && (
					<>
						<View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>First Name</Text>
								<Input
									value={firstName}
									onChangeText={setFirstName}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Last Name</Text>
								<Input
									value={lastName}
									onChangeText={setLastName}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>School</Text>
								<Input
									value={school}
									onChangeText={setSchool}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Grade</Text>
								<Input value={grade} onChangeText={setGrade} />
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Birthday</Text>
								<DateTimeInput
									birthday={birthday}
									setBirthday={setBirthday}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Age</Text>
								<Input value={age} onChangeText={setAge} />
							</View>
						</View>

						<View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Address</Text>
								<Input
									value={street}
									onChangeText={setStreet}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>City / Town</Text>
								<Input value={city} onChangeText={setCity} />
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>State</Text>
								<Input
									value={state}
									onChangeText={setState}
									autoCapitalize="characters"
									placeholder="Example RI"
									placeholderTextColor={theme.primaryText}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Zip</Text>
								<Input value={zip} onChangeText={setZip} />
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Phone</Text>
								<Input
									value={phoneNumber}
									onChangeText={setPhoneNumber}
								/>
							</View>
						</View>

						<View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Allergies</Text>
								<Input
									value={allergies}
									onChangeText={setAllergies}
									placeholder="food allergy, bee stings"
									placeholderTextColor={theme.primaryText}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>
									Medical Conditions
								</Text>
								<Input
									value={medical}
									onChangeText={setMedical}
									placeholder="Asthma, heart conditions"
									placeholderTextColor={theme.primaryText}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Doctor Name</Text>
								<Input
									value={doctorName}
									onChangeText={setDoctorName}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>
									Doctor Phone Number
								</Text>
								<Input
									value={doctorPhone}
									onChangeText={setDoctorPhone}
								/>
							</View>
						</View>

						<View style={styles.checkBoxContainer}>
							<View
								style={[
									styles.inputContainer,
									styles.checkBoxWrapper,
								]}>
								<CheckBox
									selected={playerType}
									value={'FOOTBALL_PLAYER'}
									onValueChange={() =>
										handleCheckboxChange('FOOTBALL_PLAYER')
									}
								/>
								<Text style={styles.label}>Football</Text>
							</View>

							<View
								style={[
									styles.inputContainer,
									styles.checkBoxWrapper,
								]}>
								<CheckBox
									selected={playerType}
									value={'CHEERLEADER'}
									onValueChange={() =>
										handleCheckboxChange('CHEERLEADER')
									}
								/>
								<Text style={styles.label}>Cheerleading</Text>
							</View>
						</View>

						{filteredGroups.length > 0 ? (
							<View style={styles.selectContainer}>
								<Text style={styles.label}>
									Qualified Group:
								</Text>

								{filteredGroups.map((group, idx) => {
									return (
										<Text
											key={`group-${idx}`}
											style={styles.selectItem}>
											{group.name} {group.min} -{' '}
											{group.max}
										</Text>
									);
								})}
							</View>
						) : (
							<Text style={styles.birthdayMessage}>
								Please provide birthday above
							</Text>
						)}

						<View style={styles.submitBtnWrapper}>
							<Button
								title="Submit"
								onPress={handleSubmitPlayer}
								disabled={disable}
							/>
						</View>
					</>
				)}

				{step === 2 && (
					<View style={styles.avatarWrapper}>
						<AvatarUpload playerId={playerId} />
						<Button title="Back" onPress={handleBackButton} />
						<Button title="Done" onPress={handleComplete} />
					</View>
				)}
			</ScrollView>
		</SafeArea>
	);
};

export default RegistrationScreen;

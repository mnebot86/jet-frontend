import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { Text, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Button, CheckBox, Input, SafeArea } from 'components';
import { RegisterScreenStyles } from 'styles/Register/style';
import { ROLE } from 'utils/auth';
import { register, setAuthToken } from 'services/auth';
import { global } from 'styles/globalStyles';
import { setSignedIn } from 'store/slices/user';
import { groupNamesAndIds } from 'store/selectors/group';

const Register = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const styles = RegisterScreenStyles(theme);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [selectedCheckbox, setSelectedCheckbox] = useState(null);
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleCheckboxChange = (value) => {
		setSelectedCheckbox(value);
	};

	const handleSubmit = async () => {
		const data = {
			role: selectedCheckbox,
			email,
			password,
			confirmPassword,
		};

		await register(data).then((data) => {
			if (!!data.error) {
				setErrorMessage(data.error);
				setHasError(true);

				setEmail('');
				setPassword('');
				setConfirmPassword('');
				setSelectedCheckbox('');

				return;
			}

			setAuthToken(data.token);
			dispatch(setSignedIn());
		});
	};

	return (
		<SafeArea>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<ScrollView contentContainerStyle={styles.container}>
					<View>
						<Text style={styles.header}>
							Join our football family!
						</Text>
						<Text style={styles.subHeader}>
							We can't wait to see you on the field!
						</Text>
					</View>

					<View style={styles.checkBoxContainer}>
						<View>
							<CheckBox
								title="Player"
								value={ROLE.PLAYER}
								selected={selectedCheckbox}
								onValueChange={() =>
									handleCheckboxChange(ROLE.PLAYER)
								}
							/>

							<CheckBox
								title="Guardian/Player"
								value={ROLE.GUARDIAN}
								selected={selectedCheckbox}
								onValueChange={() =>
									handleCheckboxChange(ROLE.GUARDIAN)
								}
							/>
						</View>

						<View>
							<CheckBox
								title="Coach"
								value={ROLE.COACH}
								selected={selectedCheckbox}
								onValueChange={() =>
									handleCheckboxChange(ROLE.COACH)
								}
							/>

							<CheckBox
								title="Team Mom"
								value={ROLE.TEAM_MOM}
								selected={selectedCheckbox}
								onValueChange={() =>
									handleCheckboxChange(ROLE.TEAM_MOM)
								}
							/>
						</View>
					</View>

					<View>
						<Input
							placeholder="Email"
							placeholderTextColor={theme.primaryInputTextColor}
							value={email}
							onChangeText={setEmail}
							autoCapitalize="none"
						/>

						<Input
							placeholder="Password"
							placeholderTextColor={theme.primaryInputTextColor}
							value={password}
							onChangeText={setPassword}
							secureTextEntry={true}
						/>

						<Input
							placeholder="Confirm Password"
							placeholderTextColor={theme.primaryInputTextColor}
							value={confirmPassword}
							onChangeText={setConfirmPassword}
							secureTextEntry={true}
						/>
					</View>

					{hasError && (
						<View style={global.errorContainer}>
							<Text style={global.errorText}>{errorMessage}</Text>
						</View>
					)}

					<View style={styles.btnContainer}>
						<Button title="Submit" onPress={handleSubmit} />
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeArea>
	);
};

export default Register;

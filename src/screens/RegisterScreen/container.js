import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Text, View } from 'react-native';
import { Button, CheckBox, Input } from 'components';
import { RegisterScreenStyles } from '../../styles/Register/style';
import { ROLE } from 'utils/auth';
import { register, setAuthToken } from 'services/auth';

const Register = () => {
	const theme = useTheme();
	const styles = RegisterScreenStyles(theme);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [selectedCheckbox, setSelectedCheckbox] = useState(null);

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

		await register(data)
			.then((data) => setAuthToken(data.token))
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>Join our football family!</Text>
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
						onValueChange={() => handleCheckboxChange(ROLE.PLAYER)}
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
						onValueChange={() => handleCheckboxChange(ROLE.COACH)}
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

			<View style={styles.btnContainer}>
				<Button title="Submit" onPress={handleSubmit} />
			</View>
		</View>
	);
};

export default Register;

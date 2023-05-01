import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { Text, View } from 'react-native';
import { Button, Input } from 'components';
import { RegisterScreenStyles } from '../../styles/Register/style';
import { login, setAuthToken } from 'services/auth';
import { setSignedIn } from 'store/slices/user';
import { global } from 'styles/globalStyles';

const Login = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const styles = RegisterScreenStyles(theme);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async () => {
		const data = {
			email,
			password,
		};

		await login(data).then((data) => {
			if (!!data.error) {
				setErrorMessage(data.error);
				setHasError(true);

				setEmail('');
				setPassword('');

				return;
			}

			setAuthToken(data.token);

			dispatch(setSignedIn());
		});
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>Welcome back to the game!</Text>
				<Text style={styles.subHeader}>
					Let's get back on the field and pick up where we left off!
				</Text>
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
			</View>

			{hasError && (
				<View style={global.errorContainer}>
					<Text style={global.errorText}>{errorMessage}</Text>
				</View>
			)}

			<View style={styles.btnContainer}>
				<Button title="Submit" onPress={handleSubmit} />
			</View>
		</View>
	);
};

export default Login;

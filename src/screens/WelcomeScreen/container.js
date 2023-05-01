import React, { useState, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeArea } from 'components';
import Login from './Login';
import Register from './Register';
import { WelcomeScreenStyles } from 'styles/WelcomeScreen/styles';

const WelcomeScreen = () => {
	const theme = useTheme();
	const styles = WelcomeScreenStyles(theme);

	const [loginForm, setLoginForm] = useState(true);

	const loginFormToggle = useCallback(() => {
		setLoginForm(!loginForm);
	}, [loginForm]);

	return (
		<SafeArea>
			<View style={styles.container}>
				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={[styles.btn, loginForm && styles.btnActive]}
						onPress={loginFormToggle}>
						<Text>Login</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.btn, !loginForm && styles.btnActive]}
						onPress={loginFormToggle}>
						<Text>Register</Text>
					</TouchableOpacity>
				</View>

				{loginForm ? <Login /> : <Register />}
			</View>
		</SafeArea>
	);
};

export default WelcomeScreen;

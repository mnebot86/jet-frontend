import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { Button, Input } from 'components';
import { login, setAuthToken } from 'services/auth';
import { setSignedIn } from 'store/slices/user';
import { openToast, closeToast } from '../../store/slices/toast';

const Login = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const togglePassword = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	const handleSubmit = useCallback(async () => {
		const data = {
			email,
			password,
		};

		await login(data).then((data) => {
			if (!!data.error) {
				dispatch(
					openToast({
						isOpen: true,
						message: data.error,
						messageType: 'error',
					})
				);

				setEmail('');
				setPassword('');

				setTimeout(() => {
					dispatch(closeToast());
				}, 4000);
			}

			if (!!data.token) {
				setAuthToken(data.token);

				dispatch(
					openToast({
						isOpen: true,
						message: 'Success',
						messageType: 'success',
					})
				);

				setTimeout(() => {
					dispatch(closeToast());
					dispatch(setSignedIn());
				}, 1000);
			}
		});
	}, [email, password]);

	return (
		<Container>
			<InputWrapper>
				<Input
					label="Email"
					name="email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
				/>

				<SecondInputWrapper>
					<Input
						label="Password"
						name="password"
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
				</SecondInputWrapper>
			</InputWrapper>

			<ButtonWrapper>
				<Button title="Submit" onPress={handleSubmit} />
			</ButtonWrapper>
		</Container>
	);
};

export default Login;

const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.primaryBackground};
	padding: 10px 20px;
`;

const InputWrapper = styled.View`
	margin: 80px 0;
	justify-content: space-between;
`;

const SecondInputWrapper = styled.View`
	margin-top: 40px;
`;

const ButtonWrapper = styled.View`
	align-items: center;
`;

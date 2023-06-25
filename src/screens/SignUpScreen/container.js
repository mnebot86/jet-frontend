import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import styled from 'styled-components';
import { Input, AvatarUpload, Button } from 'components';
import { register, setAuthToken } from 'services/auth';
import { setSignedIn } from 'store/slices/user';
import { openToast, closeToast } from 'store/slices/toast';

const SignUpScreen = () => {
	const dispatch = useDispatch();

	const [avatar, setAvatar] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(async () => {
		const data = {
			email,
			password,
			avatar: avatar,
		};

		const result = await register(data);

		const token = get(result, 'data.token');
		const errorMessage = result?.error;

		if (!!errorMessage) {
			dispatch(
				openToast({
					isOpen: true,
					message: errorMessage,
					messageType: 'error',
				})
			);

			setTimeout(() => {
				dispatch(closeToast());
			}, 4000);
		}

		if (!!token) {
			await setAuthToken(token);

			dispatch(
				openToast({
					isOpen: true,
					message: 'Account Created!',
					messageType: 'success',
				})
			);

			setTimeout(() => {
				dispatch(closeToast());
				dispatch(setSignedIn());
			}, 1000);
		}
	}, [email, password, avatar, dispatch]);

	return (
		<Container>
			<Header>Create Account</Header>

			<AvatarWrapper>
				<AvatarUpload setAvatar={setAvatar} />
			</AvatarWrapper>

			<InputWrapper>
				<Input
					label="Email"
					name="email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
				/>
			</InputWrapper>

			<InputWrapper>
				<Input
					label="Password"
					name="password"
					value={password}
					onChangeText={setPassword}
					autoCapitalize="none"
					secureTextEntry
					type="password"
				/>
			</InputWrapper>

			<ButtonWrapper>
				<Button
					title="Submit"
					onPress={handleSubmit}
					disabled={!avatar}
				/>
			</ButtonWrapper>
		</Container>
	);
};

export default SignUpScreen;

const Container = styled.View`
	flex: 1;
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.primaryBackground};
`;

const Header = styled.Text`
	color: ${({ theme }) => theme.primaryText};
	font-size: 30px;
	font-weight: bold;
	text-align: center;
	margin: 50px 0 20px 0;
`;

const AvatarWrapper = styled.View`
	margin-bottom: 30px;
`;

const InputWrapper = styled.View`
	margin-bottom: 40px;
`;

const ButtonWrapper = styled.View`
	margin-top: 30px;
	align-items: center;
`;

import React, { useState, useCallback } from 'react';
import {
	Box,
	Center,
	FormControl,
	Heading,
	VStack,
	Input,
	Button,
	KeyboardAvoidingView,
} from 'native-base';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { login, setAuthToken } from 'services/auth';
import { setSignedIn } from 'store/slices/user';
import { openToast, closeToast } from '../../store/slices/toast';

const Login = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = useCallback(async () => {
		setIsLoading(true);

		const data = {
			email,
			password,
		};

		await login(data).then((data) => {
			if (!!data.error) {
				setIsLoading(false);

				dispatch(
					openToast({
						isOpen: true,
						message: data.error,
						messageType: 'error',
					})
				);

				setPassword('');

				setTimeout(() => {
					dispatch(closeToast());
				}, 4000);
			}

			if (!!data.token) {
				setIsLoading(false);

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
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<Center w="100%" px="4" height="100%" bg="white">
				<Box p="2" width="100%" maxWidth="400px">
					<Heading
						size="lg"
						fontWeight="600"
						color="coolGray.800"
						mb="2">
						Welcome
					</Heading>

					<Heading
						color="coolGray.600"
						fontWeight="medium"
						size="sm"
						mb="4">
						Sign in to continue!
					</Heading>

					<VStack space={3}>
						<FormControl>
							<FormControl.Label>Email</FormControl.Label>
							<Input
								focusBorderColor="#0D45DE"
								color="#000"
								_focus={{ bg: '#D8E2FD' }}
								size="lg"
								onChangeText={setEmail}
								value={email}
								autoCapitalize="none"
							/>
						</FormControl>

						<FormControl>
							<FormControl.Label>Password</FormControl.Label>
							<Input
								type="password"
								focusBorderColor="#0D45DE"
								color="#000"
								_focus={{ bg: '#D8E2FD' }}
								size="lg"
								onChangeText={setPassword}
								value={password}
							/>
						</FormControl>

						<Button
							size="lg"
							onPress={handleSubmit}
							_pressed={{ bg: '#0934AA' }}
							bg="#0D45DE"
							isLoading={isLoading}
							isLoadingText="Submitting">
							Sign in
						</Button>
					</VStack>
				</Box>
			</Center>
		</KeyboardAvoidingView>
	);
};

export default Login;

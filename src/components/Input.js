import React, { useState, useCallback, useMemo } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

const Input = ({
	placeholder,
	placeholderTextColor,
	value,
	onChangeText,
	autoCapitalize,
	secureTextEntry,
	keyboardType,
	label,
	type,
	name,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	const togglePassword = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	const renderLock = useMemo(() => {
		if (type === 'password' && !showPassword) {
			return (
				<IconWrapper onPress={togglePassword}>
					<Image source={require('icons/show-password.png')} />
				</IconWrapper>
			);
		}

		if (type === 'password' && showPassword) {
			return (
				<IconWrapper onPress={togglePassword}>
					<Image source={require('icons/hide-password.png')} />
				</IconWrapper>
			);
		}
	}, [type, showPassword]);

	return (
		<>
			<Wrapper isFocused={isFocused} name={name}>
				{!!label ? <Label>{label}</Label> : null}

				<StyledInput
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					value={value}
					onChangeText={onChangeText}
					autoCapitalize={autoCapitalize}
					secureTextEntry={showPassword ? false : secureTextEntry}
					keyboardType={keyboardType}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>

				{renderLock}
			</Wrapper>
		</>
	);
};

export default Input;

const Wrapper = styled.View`
	flex-direction: row;
	align-items: center;
	position: relative;
	border-radius: 8px;
	border-width: 2px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background: ${({ theme }) => theme.primaryInputBackgroundColor};
	border-color: ${({ theme, isFocused, name }) =>
		isFocused ? theme.primaryFocusColor : theme.primaryInputBorderColor};
`;

const StyledInput = styled.TextInput`
	flex: 1;
	border: none;
	padding: 18px 16px;
	font-size: 16px;
	color: ${({ theme }) => theme.primaryInputTextColor};
	background: ${({ theme }) => theme.primaryBackground};
`;

const Label = styled.Text`
	color: ${({ theme }) => theme.primaryInputTextColor};
	font-weight: 700;
	position: absolute;
	top: -8px;
	left: 30px;
	background: ${({ theme }) => theme.primaryBackground};
	padding: 0 15px;
	text-align: center;
	z-index: 1;
`;

const IconWrapper = styled.TouchableOpacity`
	padding: 5px;
	background: ${({ theme }) => theme.primaryBackground};
`;

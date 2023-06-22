import React, { useState, useRef, useEffect } from 'react';
import { get } from 'lodash';
import { StyleSheet, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
	showPassword,
	togglePassword,
	type,
	error,
	name,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [errorField, setErrorField] = useState('');

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	useEffect(() => {
		if (!!error) {
			const regex = /"([^"]+)"/;

			const matches = error.match(regex);
			const extractedString =
				matches && matches.length > 1 ? matches[1] : '';

			if (extractedString.toLowerCase() === name) {
				setErrorMessage(error);
				setErrorField(extractedString);
			} else {
				setErrorMessage(null);
				setErrorField('');
			}
		}
	}, [error, errorMessage]);

	const renderLock = () => {
		if (type === 'password' && !showPassword) {
			return (
				<IconWrapper onPress={togglePassword}>
					<Image source={require('icons/lock.png')} width={10} />
				</IconWrapper>
			);
		}

		if (type === 'password' && showPassword) {
			return (
				<IconWrapper onPress={togglePassword}>
					<Image source={require('icons/unlock.png')} width={10} />
				</IconWrapper>
			);
		}
	};

	return (
		<>
			<Wrapper isFocused={isFocused} errorField={errorField} name={name}>
				{!!label ? <Label>{label}</Label> : null}

				<StyledInput
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					value={value}
					onChangeText={onChangeText}
					autoCapitalize={autoCapitalize}
					secureTextEntry={secureTextEntry}
					keyboardType={keyboardType}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>

				{renderLock()}
			</Wrapper>

			{!!errorMessage ? <TextError>{errorMessage}</TextError> : null}
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
	border-color: ${({ theme, errorField, isFocused, name }) =>
		errorField === name && errorField !== ''
			? 'red'
			: isFocused
			? theme.primaryFocusColor
			: theme.primaryInputBorderColor};
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
	width: 80px;
	text-align: center;
	z-index: 1;
`;

const IconWrapper = styled.TouchableOpacity`
	padding: 5px;
	background: ${({ theme }) => theme.primaryInputBackgroundColor};
`;

const TextError = styled.Text`
	color: red;
	margin-top: 10px;
`;

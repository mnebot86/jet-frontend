import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
} from 'react-native-reanimated';
import { Text } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components';
import {
	getToastIsOpen,
	getToastMessage,
	getMessageType,
} from 'store/selectors/toast';

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

const useToastAnimation = (isOpen) => {
	const offset = useSharedValue(isOpen ? STATUSBAR_HEIGHT : -100);

	useEffect(() => {
		offset.value = withTiming(isOpen ? STATUSBAR_HEIGHT : -100);
	}, [isOpen, offset]);

	return offset;
};

const Toast = () => {
	const isOpen = useSelector(getToastIsOpen);
	const message = useSelector(getToastMessage);
	const messageType = useSelector(getMessageType);

	const offset = useToastAnimation(isOpen);

	const containerStyle = useAnimatedStyle(() => ({ top: offset.value }));

	return (
		<Container isOpen={isOpen} style={containerStyle}>
			<ToastContainer messageType={messageType}>
				<Message>{message}</Message>
			</ToastContainer>
		</Container>
	);
};

export default Toast;

const Container = styled(Animated.View)`
	width: 100%;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	padding: 10px 20px;
`;

const ToastContainer = styled.TouchableOpacity`
	background: ${({ messageType }) =>
		messageType !== 'success' ? 'red' : 'lightgreen'};
	width: 100%;
	padding: 20px;
	border-radius: 8px;
`;

const Message = styled.Text`
	font-size: 15px;
`;

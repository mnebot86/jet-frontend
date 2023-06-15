import React from 'react';
import styled from 'styled-components';

const Button = ({ title, onPress }) => {
	return (
		<StyleButton onPress={onPress}>
			<StyleText>{title}</StyleText>
		</StyleButton>
	);
};

export default Button;

const StyleButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.primaryButtonColor};
	border-radius: 6px;
	max-width: 277px;
	padding: 20px 40px;
	width: 100%;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyleText = styled.Text`
	color: ${({ theme }) => theme.primaryButtonText};
	font-weight: 700;
	font-size: 24px;
	text-align: center;
`;

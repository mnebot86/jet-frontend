import React from 'react';
import styled from 'styled-components';
import { SettingGear, ChatBubble } from 'icons';

const FeedHeader = ({ toggleShowInput }) => {
	return (
		<Container>
			<TouchWrapper>
				<SettingGear width={25} fill="black" />
			</TouchWrapper>

			<TouchWrapper onPress={toggleShowInput}>
				<ChatBubble width={25} fill="black" />
			</TouchWrapper>
		</Container>
	);
};

export default FeedHeader;

const Container = styled.View`
	flex-direction: row;
	padding: 0 10px 10px;
	justify-content: space-between;
	align-items: center;
`;

const TouchWrapper = styled.TouchableOpacity``;

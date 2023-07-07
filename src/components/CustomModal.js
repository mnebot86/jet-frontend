import React from 'react';
import { View, Modal } from 'react-native';
import styled from 'styled-components';
import { SafeArea } from 'components';
import { Close } from 'icons';

const CustomModal = ({
	children,
	animationType,
	transparent,
	isOpen,
	onRequestClose,
	toggle,
}) => {
	return (
		<Wrapper>
			<Container
				animationType={animationType}
				transparent={transparent}
				visible={isOpen}
				onRequestClose={onRequestClose}>
				<SafeArea>
					<InnerWrapper>
						<CloseButton onPress={toggle}>
							<Close width={30} />
						</CloseButton>
						{children}
					</InnerWrapper>
				</SafeArea>
			</Container>
		</Wrapper>
	);
};

Modal.defaultProps = {
	children: null,
	animationType: 'slide',
	transparent: false,
	isOpen: false,
	onRequestClose: () => null,
};

export default CustomModal;

const Container = styled(Modal)`
	flex: 1;
`;

const Wrapper = styled.View`
	flex: 1;
`;

const InnerWrapper = styled.View`
	flex: 1;
	padding: 10px 20px;
`;

const CloseButton = styled.TouchableOpacity`
	align-items: flex-end;
`;

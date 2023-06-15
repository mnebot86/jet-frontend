import styled, { useTheme } from 'styled-components';
import { SafeArea, Button } from 'components';

const WelcomeScreen = ({ navigation }) => {
	const theme = useTheme();

	const { navigate } = navigation;

	return (
		<SafeArea>
			<Container>
				<StyleImage source={theme.primaryLogo} />

				<Header>Proud to be a Jet</Header>

				<ButtonContainer>
					<Wrapper>
						<Button
							title="Login"
							onPress={() => navigate('LoginScreen')}
						/>
					</Wrapper>

					<Button
						title="Register"
						onPress={() => navigate('SignUpScreen')}
					/>
				</ButtonContainer>
			</Container>
		</SafeArea>
	);
};

export default WelcomeScreen;

const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.primaryBackground};
`;

const StyleImage = styled.Image`
	max-width: 403px;
	height: 273px;
	margin: 20px auto;
`;

const Header = styled.Text`
	color: ${({ theme }) => theme.primaryText};
	text-align: center;
	font-size: 32px;
	font-weight: bold;
	font-style: italic;
	margin-bottom: 157px;
`;

const ButtonContainer = styled.View`
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.View`
	margin-bottom: 80px;
	width: 100%;
	align-items: center;
`;

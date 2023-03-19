import React from 'react';
import { useTheme } from 'styled-components';
import { Text, View, Image } from 'react-native';
import { SafeArea, Button } from 'components';
import { WelcomeScreenStyles } from 'styles/WelcomeScreen/styles';

const WelcomeScreen = () => {
	const theme = useTheme();
	const styles = WelcomeScreenStyles(theme);

	return (
		<SafeArea>
			<View style={styles.container}>
				<Image source={theme.primaryLogo} style={styles.image} />

				<Text style={styles.header}>
					Building <Text style={styles.accent}>champions</Text> on and
					off the field.
				</Text>

				<View style={styles.btnContainer}>
					<Button title="Login" />

					<Button title="Register" />
				</View>
			</View>
		</SafeArea>
	);
};

export default WelcomeScreen;
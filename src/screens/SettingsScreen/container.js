import React from 'react';
import { useTheme } from 'styled-components';
import { StyleSheet, View } from 'react-native';
import AvatarUpload from './AvatarUpload';
import Logout from './Logout';
import { global } from 'styles/globalStyles';

const SettingScreen = () => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		container: {
			...global.container,
			backgroundColor: theme.primaryBackground,
		},
	});

	return (
		<View style={styles.container}>
			<AvatarUpload />
			<Logout />
		</View>
	);
};

export default SettingScreen;

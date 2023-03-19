import React from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components';

const SafeArea = ({ children }) => {
	const theme = useTheme();
	const isIos = Platform.OS === 'ios';
	const paddingTop = isIos ? 0 : StatusBar.currentHeight;

	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingTop,
				backgroundColor: theme.primaryBackground,
			}}>
			{children}
		</SafeAreaView>
	);
};

export default SafeArea;

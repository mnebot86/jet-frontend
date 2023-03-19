import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';

const Main = () => {
	return (
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	);
};

export default Main;

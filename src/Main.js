import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from 'navigation/AuthStack';
import { Alert } from 'components';
import { getHasError } from './store/selectors/alert';

const Main = () => {
	const hasError = useSelector(getHasError);

	return (
		<NavigationContainer>
			<AuthStack />
			<Alert />
		</NavigationContainer>
	);
};

export default Main;

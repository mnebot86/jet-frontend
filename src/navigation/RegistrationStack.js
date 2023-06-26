import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from 'screens/RegistrationScreen/container';
import FeedScreen from 'screens/FeedScreen/container';
import { navigationStyles } from 'styles/navigation/style';

const Stack = createStackNavigator();

const RegistrationStack = () => {
	const theme = useTheme();
	const styles = navigationStyles(theme);

	return (
		<Stack.Navigator
			initialRouteName="Feed"
			screenOptions={{
				headerBackTitleVisible: false,
				...styles,
			}}>
			<Stack.Screen
				name="Feed"
				component={FeedScreen}
				options={{ headerShown: false }}
			/>

			<Stack.Screen name="Registration" component={RegistrationScreen} />
		</Stack.Navigator>
	);
};

export default RegistrationStack;

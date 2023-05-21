import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import PlayersScreen from '../screens/PlayersScreen/container';
import PlayerDetailScreen from '../screens/PlayerDetailScreen/container';
import { navigationStyles } from 'styles/navigation/style';

const Stack = createStackNavigator();

const RegistrationStack = () => {
	const theme = useTheme();
	const styles = navigationStyles(theme);

	return (
		<Stack.Navigator
			initialRouteName="Players"
			screenOptions={{
				headerBackTitleVisible: false,
				...styles,
			}}>
			<Stack.Screen name="Players" component={PlayersScreen} />

			<Stack.Screen
				name="PlayerDetail"
				component={PlayerDetailScreen}
				options={{ title: 'Profile' }}
			/>
		</Stack.Navigator>
	);
};

export default RegistrationStack;

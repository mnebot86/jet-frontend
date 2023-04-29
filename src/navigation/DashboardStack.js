import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RosterScreen from 'screens/RosterScreen/container';
import GameScreen from 'screens/GamesScreen/container';
import SettingScreen from 'screens/SettingsScreen/container';
import RegistrationStack from 'navigation/RegistrationStack';
import { navigationStyles } from 'styles/navigation/style';

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
	const theme = useTheme();
	const styles = navigationStyles(theme);

	return (
		<Tab.Navigator
			initialRouteName="RegistrationStack"
			title="Dashboard"
			screenOptions={{
				headerBackTitleVisible: false,
				...styles,
			}}>
			<Tab.Screen name="Roster" component={RosterScreen} />

			<Tab.Screen
				name="RegistrationStack"
				component={RegistrationStack}
				options={{ headerShown: false, title: 'Dashboard' }}
			/>

			<Tab.Screen name="Games" component={GameScreen} />

			<Tab.Screen name="Settings" component={SettingScreen} />
		</Tab.Navigator>
	);
};

export default DashboardStack;

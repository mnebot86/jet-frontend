import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayersStack from 'navigation/PlayersStack';
import GameScreen from 'screens/GamesScreen/container';
import SettingScreen from 'screens/SettingsScreen/container';
import RegistrationStack from 'navigation/RegistrationStack';
import { getRoles } from 'store/selectors/user';
import { navigationStyles } from 'styles/navigation/style';

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
	const roles = useSelector(getRoles);
	const theme = useTheme();
	const styles = navigationStyles(theme);

	// const COACH = roles.includes('COACH');

	return (
		<Tab.Navigator
			initialRouteName="RegistrationStack"
			title="Dashboard"
			screenOptions={{
				headerBackTitleVisible: false,
				...styles,
			}}>
			<Tab.Screen
				name="PlayersStack"
				component={PlayersStack}
				options={{
					title: 'Players',
					headerShown: false,
				}}
			/>

			<Tab.Screen
				name="RegistrationStack"
				component={RegistrationStack}
				options={{ headerShown: false, title: 'Dashboard' }}
			/>

			{/* {COACH && <Tab.Screen name="Games" component={GameScreen} />} */}

			<Tab.Screen name="Settings" component={SettingScreen} />
		</Tab.Navigator>
	);
};

export default DashboardStack;

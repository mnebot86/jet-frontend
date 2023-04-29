import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from 'navigation/AuthStack';
import DashboardStack from 'navigation/DashboardStack';
import { verifyUser, getAuthToken } from 'services/auth';
import { getGroups } from 'services/groups';
import { getSignedIn } from 'store/selectors/user';
import { setUser, clearUser } from 'store/slices/user';
import { navigationStyles } from 'styles/navigation/style';
import { setGroups } from 'store/slices/group';

const Stack = createStackNavigator();

const Main = () => {
	const dispatch = useDispatch();
	const isSignedIn = useSelector(getSignedIn);
	const theme = useTheme();
	const styles = navigationStyles(theme);

	useEffect(() => {
		const verifyToken = async () => {
			const token = await getAuthToken();

			if (!!token) {
				await verifyUser(token).then((res) => {
					dispatch(setUser(res));
				});
			} else {
				dispatch(clearUser());
			}
		};

		verifyToken();
	}, [isSignedIn]);

	useEffect(() => {
		const fetchGroups = async () => {
			const groups = await getGroups();

			if (!groups) return;

			dispatch(setGroups(groups));
		};

		fetchGroups();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="AuthStack"
				screenOptions={{
					headerBackTitleVisible: false,
					...styles,
				}}>
				{!isSignedIn ? (
					<Stack.Screen
						name="AuthStack"
						component={AuthStack}
						options={{ headerShown: false }}
					/>
				) : (
					<Stack.Screen
						name="DashboardStack"
						component={DashboardStack}
						options={{ headerShown: false }}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Main;

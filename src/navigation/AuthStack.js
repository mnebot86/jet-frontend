import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, SignUpScreen, LoginScreen } from 'screens';
import { navigationStyles } from 'styles/navigation/style';

const Stack = createStackNavigator();

const AuthStack = () => {
	const theme = useTheme();
	const styles = navigationStyles(theme);

	return (
		<Stack.Navigator
			initialRouteName="WelcomeScreen"
			screenOptions={{
				headerBackTitleVisible: false,
				...styles,
			}}>
			<Stack.Screen
				name="WelcomeScreen"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{ title: 'Register' }}
			/>

			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ title: 'Login' }}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;

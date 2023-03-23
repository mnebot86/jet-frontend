import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/container';
import Register from '../screens/RegisterScreen/container';
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

			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
};

export default AuthStack;

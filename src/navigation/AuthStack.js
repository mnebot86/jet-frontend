import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/container';
import Register from '../screens/RegisterScreen/container';

const Stack = createStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="WelcomeScreen">
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

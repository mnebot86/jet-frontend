import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { SafeArea } from 'components';
import { global } from 'styles/globalStyles';
import ArrowSvg from 'icons/link-arrow.svg';

const DashboardScreen = ({ navigation }) => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		container: {
			...global.container,
			alignItems: 'center',
			paddingTop: 20,
		},
		header: {
			...global.header,
		},
		caption: {
			...global.sectionTitles,
			alignSelf: 'flex-start',
			marginTop: 87,
			marginBottom: 37,
		},
		text: {
			color: theme.primaryText,
			fontSize: 18,
			marginBottom: 16,
		},
		link: {
			marginTop: 54,
			flexDirection: 'row',
			width: '100%',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		linkText: {
			textAlign: 'center',
			fontSize: 18,
			fontWeight: '600',
			color: 'blue',
		},
	});

	return (
		<SafeArea>
			<ScrollView contentContainerStyle={styles.container}>
				<StatusBar style="auto" />

				<Text style={styles.header}>Welcome to the 2023 season!</Text>

				<TouchableOpacity
					style={styles.link}
					onPress={() => navigation.navigate('Registration')}>
					<Text style={styles.linkText}>Registration</Text>
					<ArrowSvg width={25} fill="blue" />
				</TouchableOpacity>

				<View>
					<Text style={styles.caption}>Bulletin</Text>

					<Text style={styles.text}>
						Parent meeting July 31, 6pm Graystone school
					</Text>

					<Text style={styles.text}>
						*All Players are required to raise $100 in fundraiser*
					</Text>

					<Text style={styles.text}>
						Cheerleaders are required to purchase White Cheer
						Sneakers and Black boy-cut shores by 8/15/23
					</Text>

					<Text style={styles.text}>
						New uniforms for the 2023 season
					</Text>

					<Text style={styles.text}>
						Sweat Suit, Bow and Uniforms included
					</Text>
				</View>
			</ScrollView>
		</SafeArea>
	);
};

export default DashboardScreen;

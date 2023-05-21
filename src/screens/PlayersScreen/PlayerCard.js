import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const PlayerCard = ({
	firstName,
	lastName,
	position,
	avatar,
	jerseyNumber,
	group,
	_id,
}) => {
	const theme = useTheme();
	const { navigate } = useNavigation();

	const handlePress = () => {
		navigate('PlayerDetail', { id: _id });
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 5,
			height: 120,
			flexDirection: 'row',
			justifyContent: 'space-between',
			backgroundColor: theme.primaryBackground,
			borderBottomColor: 'lightgray',
			borderBottomWidth: 1,
		},
		section: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		text: {
			color: theme.primaryText,
		},
		image: {
			width: 100,
			height: 100,
			borderRadius: 100,
		},
	});

	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.9}
			style={styles.container}>
			<View style={styles.section}>
				{!!avatar && (
					<Image source={{ uri: avatar.url }} style={styles.image} />
				)}
			</View>

			<View style={styles.section}>
				<Text style={styles.text}>
					{firstName} {lastName}
				</Text>

				<Text>{group.name}</Text>
			</View>

			<View style={styles.section}>
				<Text>{jerseyNumber}</Text>
				<Text>{position}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PlayerCard;

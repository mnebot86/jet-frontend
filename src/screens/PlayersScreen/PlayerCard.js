import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'styled-components';

const PlayerCard = ({
	firstName,
	lastName,
	position,
	avatar,
	jerseyNumber,
	group,
}) => {
	const theme = useTheme();

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
		<View style={styles.container}>
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
		</View>
	);
};

export default PlayerCard;

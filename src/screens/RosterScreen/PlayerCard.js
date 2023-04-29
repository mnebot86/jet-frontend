import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'styled-components';

const PlayerCard = ({
	firstName,
	lastName,
	position,
	avatar,
	jerseyNumber,
}) => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 15,
			height: 120,
			flexDirection: 'row',
			backgroundColor: theme.primaryBackground,
		},
		text: {
			color: theme.primaryText,
		},
		image: {
			width: 80,
			height: 80,
			borderRadius: 50,
		},
	});

	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.text}>
					{firstName} {lastName}
				</Text>
				<Text>{jerseyNumber}</Text>
				<Text style={styles.text}>{position}</Text>
			</View>

			<Image source={{ uri: avatar }} style={styles.image} />
		</View>
	);
};

export default PlayerCard;

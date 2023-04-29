import React from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { global } from 'styles/globalStyles';
import { formatDateAndTime } from 'utils/helper';
import { getGames } from '../../store/selectors/user';

const GameScreen = () => {
	const theme = useTheme();
	const games = useSelector(getGames);

	const styles = StyleSheet.create({
		container: {
			...global.container,
			backgroundColor: theme.primaryBackground,
		},
		text: {
			color: theme.primaryText,
		},
		flatList: {
			flex: 1,
		},
		gameContainer: {
			paddingVertical: 10,
			borderBottomWidth: 2,
			borderColor: 'grey',
		},
		gameTextContainer: {
			marginVertical: 15,
		},
		gameTextHeader: {
			color: theme.primaryText,
			textAlign: 'center',
			fontSize: 20,
			textTransform: 'capitalize',
		},
		dateTime: {
			flexDirection: 'row',
			color: theme.primaryText,
			justifyContent: 'space-around',
			marginBottom: 10,
		},
		location: {
			textAlign: 'center',
			color: theme.primaryText,
			marginBottom: 10,
		},
		addressWrapper: {
			flexDirection: 'row',
			justifyContent: 'center',
			gap: 5,
		},
	});

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatList}
				data={games}
				keyExtractor={(game, idx) => `game-${idx}`}
				renderItem={({ item }) => (
					<View style={styles.gameContainer}>
						<View style={styles.gameTextContainer}>
							<Text style={styles.gameTextHeader}>
								{item.opposingTeam}
							</Text>
						</View>

						<View style={styles.dateTime}>
							<Text style={styles.text}>
								{formatDateAndTime(item.dateTime).date}
							</Text>

							<Text style={styles.text}>
								{formatDateAndTime(item.dateTime).time}
							</Text>
						</View>

						<View>
							<Text style={styles.location}>
								{item.location.name}
							</Text>

							<View style={styles.addressWrapper}>
								<Text style={styles.text}>
									{item.location.streetNumber}
								</Text>

								<Text style={styles.text}>
									{item.location.streetName}
								</Text>

								<Text style={styles.text}>
									{item.location.city}
								</Text>

								<Text style={styles.text}>
									{item.location.state}
								</Text>

								<Text style={styles.text}>
									{item.location.zip}
								</Text>
							</View>
						</View>

						<View>
							<Text style={styles.gameText}>
								{item.finalScore.home}
							</Text>

							<Text style={styles.gameText}>
								{item.finalScore.away}
							</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default GameScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getNextGame } from 'store/selectors/user';
import { formatDateAndTime } from 'utils/helper';

const NextGame = () => {
	const nextGame = useSelector(getNextGame);

	return (
		<View>
			{!nextGame ? (
				<Text style={styles.text}>No Upcoming Game</Text>
			) : (
				<View>
					<Text style={styles.text}>Next Game</Text>
					<Text style={styles.text}>{nextGame?.opposingTeam}</Text>
					<Text style={styles.text}>
						{formatDateAndTime(nextGame?.dateTime).date}
					</Text>
				</View>
			)}
		</View>
	);
};

export default NextGame;

const styles = StyleSheet.create({});

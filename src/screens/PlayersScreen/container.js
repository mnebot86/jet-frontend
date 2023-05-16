import React from 'react';
import { useTheme } from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import PlayerCard from './PlayerCard';
import { getPlayers } from 'store/selectors/user';

const PlayerScreen = () => {
	const players = useSelector(getPlayers);
	const theme = useTheme();

	const styles = StyleSheet.create({
		container: {
			backgroundColor: theme.primaryBackground,
		},
		rowFront: {
			width: '100%',
		},
		rowBack: {
			flexDirection: 'row',
			width: '100%',
			height: 120,
			backgroundColor: 'black',
		},
		text: {
			color: 'white',
		},
	});

	return (
		<SwipeListView
			style={styles.container}
			data={players}
			renderItem={(data, rowMap) => (
				<View style={styles.rowFront}>
					<PlayerCard {...data.item} />
				</View>
			)}
			renderHiddenItem={(data, rowMap) => (
				<View style={styles.rowBack}>
					<Text style={styles.text}>Left</Text>
					<Text style={styles.text}>Right</Text>
				</View>
			)}
			leftOpenValue={75}
			rightOpenValue={-75}
		/>
	);
};

export default PlayerScreen;

import React from 'react';
import { useTheme } from 'styled-components';
import {
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableHighlight,
} from 'react-native';
import { useSelector } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import PlayerCard from './PlayerCard';
import { getPlayers } from 'store/selectors/user';

const PlayerScreen = () => {
	const players = useSelector(getPlayers);
	const theme = useTheme();

	const renderItem = (data) => (
		<View>
			<PlayerCard {...data.item} />
		</View>
	);

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

	const noPlayers = players.length < 1;

	if (noPlayers) {
		return (
			<View
				style={[
					styles.container,
					{ justifyContent: 'center', alignItems: 'center' },
				]}>
				<Text>No Players Registered</Text>
			</View>
		);
	}

	return (
		<SwipeListView
			style={styles.container}
			data={players}
			renderItem={renderItem}
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

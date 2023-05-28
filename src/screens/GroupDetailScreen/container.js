import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getGroup } from 'services/groups';

const GroupDetailScreen = ({ route }) => {
	const { id } = route.params;
	const [group, setGroup] = useState({});

	useEffect(() => {
		if (!!id) {
			getGroup(id).then(({ data }) => {
				setGroup(data);
			});
		}
	}, [id]);

	const { coaches, roster } = group;
	return (
		<ScrollView style={styles.container}>
			<View>
				<Text>Roster</Text>
				{roster?.map((player, idx) => {
					const {
						avatar,
						firstName,
						lastName,
						positions,
						jerseyNumber,
					} = player;
					return (
						<View key={`player-${idx}`}>
							<Image
								source={{ uri: avatar }}
								style={styles.image}
							/>

							<Text>
								{firstName} {lastName}
							</Text>
							<Text>{jerseyNumber || '00'}</Text>
							<Text>{positions[0]}</Text>
						</View>
					);
				})}
				<View></View>
			</View>
			<View>
				<Text>Coaches</Text>

				{coaches?.map((coach, idx) => {
					const { avatar, firstName, lastName, email } = coach;
					return (
						<View key={`coach-${idx}`} style={styles.coachCard}>
							<Image
								source={{ uri: avatar }}
								style={styles.image}
							/>

							<View style={styles.coachCardContent}>
								<Text>
									{firstName} {lastName}
								</Text>

								<Text>{email}</Text>
							</View>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default GroupDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
	},
	coachCard: {
		backgroundColor: 'lightgray',
		flexDirection: 'row',
	},
	coachCardContent: {},
	image: {
		width: 50,
		height: 50,
	},
});

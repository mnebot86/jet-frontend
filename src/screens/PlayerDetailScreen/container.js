//TODO: Might be a good place to add this player group team schedule and group chat

import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getPlayer } from '../../services/player';
import moment from 'moment';

const PlayerDetailScreen = () => {
	const route = useRoute();
	const { id } = route.params;

	const [player, setPlayer] = useState({});

	useEffect(() => {
		getPlayer(id).then(({ data }) => {
			setPlayer({ ...data.player });
		});
	}, [id]);

	const {
		avatar,
		firstName,
		lastName,
		address,
		birthday,
		group,
		jerseyNumber,
		positions,
		age,
		grade,
		absent,
		isStriper,
		guardians,
		school,
		allergies,
		medicalConditions,
		doctorName,
		doctorNumber,
	} = player;

	return (
		<ScrollView style={styles.container}>
			<Image
				source={{ uri: avatar?.url }}
				style={{ width: '100%', height: 300 }}
			/>

			<Text style={styles.name}>
				{firstName} {lastName}
			</Text>

			<Text>{group?.name}</Text>
			<Text>{jerseyNumber}</Text>

			{isStriper && <Text>Striper</Text>}

			<View>
				<Text>{positions?.length > 1 ? 'Positions' : 'Position'}</Text>
				{positions?.map((position, idx) => (
					<Text key={`position-${idx}`}>{position}</Text>
				))}
			</View>

			<View>
				<Text>Number of Absent</Text>
				<Text>{absent}</Text>
			</View>

			<View>
				<Text>Birthday</Text>
				<Text>{moment(birthday).format('MM/DD/YYYY')}</Text>
			</View>

			<View>
				<Text>Age</Text>
				<Text>{age}</Text>
			</View>

			<View>
				<Text>School</Text>
				<Text>{school}</Text>
			</View>
			<View>
				<Text>Grade</Text>
				<Text>{grade}th</Text>
			</View>

			<View>
				<View>
					<Text>Address</Text>
					<Text style={styles.address}>{address?.street}</Text>
				</View>

				<View>
					<Text>City</Text>
					<Text style={styles.address}>{address?.city}</Text>
				</View>

				<View>
					<Text>State</Text>
					<Text style={styles.address}>{address?.state}</Text>
				</View>

				<View>
					<Text>Zip</Text>
					<Text style={styles.address}>{address?.zip}</Text>
				</View>
			</View>

			<View>
				<Text>Guardians</Text>

				{guardians?.map((guardian, idx) => (
					<View key={`guardian-${idx}`}>
						<Text>{guardian.email}</Text>
					</View>
				))}
			</View>

			<View>
				<Text>Allergies</Text>

				{allergies?.map((allergy, idx) => {
					<Text key={`allgery-${idx}`}>{allergy}</Text>;
				})}
			</View>

			<View>
				<Text>Medical Conditions</Text>

				{medicalConditions?.map((medical, idx) => {
					<Text key={`medical-${idx}`}>{medical}</Text>;
				})}
			</View>

			<View>
				<Text>Doctor</Text>
				<Text>{doctorName}</Text>
			</View>

			<View>
				<Text>Doctor Number</Text>
				<Text>{doctorNumber}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	name: {
		fontSize: 30,
		marginVertical: 10,
	},
	address: {
		marginBottom: 5,
		fontSize: 18,
	},
});

export default PlayerDetailScreen;

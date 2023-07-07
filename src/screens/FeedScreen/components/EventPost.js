import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components';

const EventPost = () => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		container: {
			marginVertical: 10,
		},
		text: {
			color: theme.primaryText,
			textAlign: 'center',
			fontSize: 20,
			fontWeight: '700',
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Jets sign ups are now open!</Text>
			<Text style={[styles.text]}>First practice is on August 1st</Text>
		</View>
	);
};

export default EventPost;

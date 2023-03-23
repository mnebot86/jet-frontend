import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { getHasError } from 'store/selectors/alert';
import { setAlert, clearAlert } from 'store/slices/alert';

const Alert = () => {
	const hasError = useSelector(getHasError);
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(clearAlert());
		console.log('Click');
	};

	return (
		<Modal animationType="slide" transparent={true} visible={hasError}>
			<TouchableOpacity style={styles.container} onPress={closeModal}>
				<Text style={styles.text}>MESSAGE TEST</Text>
			</TouchableOpacity>
		</Modal>
	);
};

export default Alert;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.8)',
	},
	text: {
		color: 'white',
		fontSize: 24,
		fontWeight: 600,
	},
});

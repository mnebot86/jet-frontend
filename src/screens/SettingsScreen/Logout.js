import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { clearUser } from 'store/slices/user';
import { deleteAuthToken } from 'services/auth';

const Logout = () => {
	const dispatch = useDispatch();

	const handlePress = () => {
		deleteAuthToken();
		dispatch(clearUser());
	};

	return <Button title="Logo" onPress={handlePress} />;
};

export default Logout;

const styles = StyleSheet.create({});

import React, { useEffect, useState, useCallback } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { get } from 'lodash';
import { SafeArea, Input, CustomModal } from 'components';
import FeedCard from './components/FeedCard';
import FeedHeader from './components/FeedHeader';
import { socket } from 'services/socket';
import { createFeedPost, getFeedPosts } from 'services/feed';

const PLACEHOLDER = {
	label: 'Select group to announce to',
	value: null,
};

const ITEMS = [
	{ label: 'Admin', value: 'ADMIN' },
	{ label: 'Varsity', value: 'VARSITY' },
	{
		label: 'Varsity Cheer',
		value: 'VARSITY_CHEER',
	},
	{ label: 'Junior', value: 'JUNIOR_VARSITY' },
	{
		label: 'Junior Cheer',
		value: 'JUNIOR_VARSITY_CHEER',
	},
	{ label: 'Peewee', value: 'PEEWEE' },
	{
		label: 'Peewee Cheer',
		value: 'PEEWEE_CHEER',
	},
	{
		label: 'Junior Peewee',
		value: 'JUNIOR_PEEWEE',
	},
	{
		label: 'Junior Peewee Cheer',
		value: 'JUNIOR_PEEWEE_CHEER',
	},
	{ label: 'Flag', value: 'FLAG' },
	{ label: 'Flag Cheer', value: 'FLAG_CHEER' },
];

const FeedScreen = () => {
	const [message, setMessage] = useState('');
	const [feedPosts, setFeedPosts] = useState([]);
	const [showInput, setShowInput] = useState(false);
	const [group, setGroup] = useState('');

	const toggleShowInput = useCallback(() => {
		setShowInput(!showInput);
	}, [showInput]);

	const handleSubmit = useCallback(async () => {
		if (!message) return;

		const newMessage = {
			message,
			group,
		};

		await createFeedPost(newMessage);

		setMessage('');

		setShowInput(false);
	}, [message]);

	useEffect(() => {
		const fetchFeedPosts = async () => {
			const posts = await getFeedPosts();

			setFeedPosts(get(posts, 'data.reverseFeedPost'));
		};

		fetchFeedPosts();

		socket.on('new_feed', (newFeedPost) => {
			setFeedPosts((prevFeedPosts) => [newFeedPost, ...prevFeedPosts]);
		});

		return () => {
			socket.off('new_feed');
		};
	}, []);

	return (
		<SafeArea>
			<StatusBar style="auto" />
			<Container>
				<FeedHeader toggleShowInput={toggleShowInput} />
				<FlatList
					initialNumToRender={15}
					data={feedPosts}
					renderItem={({ item }) => (
						<FeedCard key={`feedPost-${item._id}`} {...item} />
					)}
					keyExtractor={(item) => item._id}
				/>

				<CustomModal
					isOpen={showInput}
					toggle={toggleShowInput}
					transparent>
					<Body>
						<SelectWrapper>
							<RNPickerSelect
								placeholder={PLACEHOLDER}
								onValueChange={(value) => setGroup(value)}
								items={ITEMS}
								style={select}
							/>
						</SelectWrapper>

						<InputWrapper>
							<Input
								name="message"
								value={message}
								onChangeText={setMessage}
								type="submit"
								onPress={handleSubmit}
							/>
						</InputWrapper>
					</Body>
				</CustomModal>
			</Container>
		</SafeArea>
	);
};

export default FeedScreen;

const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.primaryBackground};
	padding: 10px 20px;
	overflow: hidden;
	height: 100%;
`;

const Body = styled.View`
	flex: 1;
	justify-content: center;
`;

const SelectWrapper = styled.View``;

const InputWrapper = styled.View`
	justify-content: center;
`;

const select = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	inputAndroid: {
		fontSize: 16,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
});

import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Placeholder from 'placeholders/avatar-placeholder.png';
import { uploadAvatar } from 'services/avatar';

const AvatarUpload = ({ setAvatar }) => {
	const [image, setImage] = useState(null);
	const [uniqueId, setUniqueId] = useState(null);

	useEffect(() => {
		setUniqueId(uuid());
	}, []);

	const pickImage = async () => {
		const { status } =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status !== 'granted') {
			alert('Sorry, we need camera roll permission to make this work!');
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
		});

		if (!result.canceled && result.assets.length > 0) {
			const { uri } = result.assets[0];

			setImage(uri);
		}
	};

	const sendImage = async () => {
		if (!image) {
			return;
		}

		const formData = new FormData();

		const type = image.split('.')[1];

		formData.append('avatar', {
			uri: image,
			name: `${uniqueId}_avatar`,
			type: `image/${type}`,
		});

		formData.append('uniqueId', uniqueId);

		try {
			const url = await uploadAvatar(formData);

			setAvatar(url);

			console.log('URL', url);
		} catch (error) {
			'Error uploading avatar', error;
		}
	};

	useEffect(() => {
		if (!!image) {
			sendImage();
		}
	}, [image]);

	return (
		<View>
			<View>
				<ImageWrapper style={{ borderRadius: 100 }} onPress={pickImage}>
					{!image ? (
						<StyledImage source={Placeholder} resizeMode="cover" />
					) : (
						<StyledImage
							source={{ uri: image }}
							resizeMode="cover"
						/>
					)}
				</ImageWrapper>
			</View>

			<Header>Upload Portrait</Header>
		</View>
	);
};

export default AvatarUpload;

const Header = styled.Text`
	text-align: center;
	font-size: 18px;
	padding: 15px 0;
	font-weight: 600;
`;

const ImageWrapper = styled.TouchableOpacity`
	aspect-ratio: 1;
	flex-direction: row;
	justify-content: center;
	border: 2px solid black;
	width: 150px;
	align-self: center;
	overflow: hidden;
`;

const StyledImage = styled.Image`
	width: 100%;
	height: 100%;
`;

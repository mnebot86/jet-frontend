import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Placeholder from 'placeholders/avatar-placeholder.png';
import { getUserId } from 'store/selectors/user';
import { setUserPlayerAvatar } from 'store/slices/user';
import { uploadAvatar } from 'services/avatar';

const AvatarUpload = ({ playerId }) => {
	const userId = useSelector(getUserId);
	const dispatch = useDispatch();

	const [image, setImage] = useState(null);
	const [percentage, setPercentage] = useState(0);

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
		console.log('Image', image);
		if (!image) {
			return;
		}

		const id = playerId || userId;

		const formData = new FormData();
		const type = image.split('.')[1];

		formData.append('avatar', {
			uri: image,
			name: `${id}_avatar`,
			type: `image/${type}`,
		});

		if (!!playerId) {
			formData.append('playerId', playerId);
		}

		try {
			const url = await uploadAvatar(formData, (event) => {
				const progress = Math.round((event.loaded / event.total) * 100);
				setPercentage(progress);

				console.log(
					`Upload progress: ${progress}%, loaded: ${event.loaded}, total: ${event.total}`
				);
			});

			dispatch(
				setUserPlayerAvatar({
					id,
					avatar: url,
				})
			);
		} catch (error) {
			console.log('Error uploading avatar', error);
		}
	};

	useEffect(() => {
		if (!!image) {
			sendImage();
		}
	}, [image]);

	return (
		<View>
			<Text style={styles.title}>Profile Image</Text>

			<TouchableOpacity onPress={pickImage}>
				<View style={styles.imgWrapper}>
					{!image ? (
						<Image
							source={Placeholder}
							style={styles.image}
							resizeMode="cover"
						/>
					) : (
						<Image
							source={{ uri: image }}
							style={styles.image}
							resizeMode="cover"
						/>
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default AvatarUpload;

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: 18,
		paddingVertical: 15,
		fontWeight: '600',
	},
	imgWrapper: {
		aspectRatio: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 100,
		borderColor: 'black',
		borderWidth: 2,
		overflow: 'hidden',
		width: 200,
		alignSelf: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	btnWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
});

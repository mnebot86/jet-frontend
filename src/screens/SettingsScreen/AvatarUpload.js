import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Placeholder from 'placeholders/avatar-placeholder.png';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { upLoadAvatar } from '../../services/avatar';
import { getUserId } from 'store/selectors/user';

const AvatarUpload = () => {
	const userId = useSelector(getUserId);
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

		if (!result.canceled) {
			setImage(result.uri);
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
			name: `${userId}_avatar`,
			type: `image/${type}`,
		});

		upLoadAvatar(formData, (event) => {
			const progress = Math.round((event.loaded / event.total) * 100);
			setPercentage(progress);

			console.log(
				`Upload progress: ${progress}%, loaded: ${event.loaded}, total: ${event.total}`
			);
		}).then((data) => {
			console.log('Upload complete:', data);
		});
	};

	return (
		<View>
			<Text style={styles.title}>Profile Image</Text>

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

			<View style={styles.btnWrapper}>
				<Button title="Album" onPress={pickImage} />

				<Button title="Upload" onPress={sendImage} disabled={!image} />
			</View>

			{/* <Text>{percentage}%</Text> */}
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
		width: 100,
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

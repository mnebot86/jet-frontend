import moment from 'moment';
import styled from 'styled-components';

const FeedCard = ({ createdAt, group, message }) => {
	return (
		<PostCard>
			<DateGroupWrapper>
				<Date>{moment(createdAt).format('MM/DD')}</Date> -{' '}
				<GroupName>{group}</GroupName>
			</DateGroupWrapper>

			<PostText>{message}</PostText>
		</PostCard>
	);
};

export default FeedCard;

const PostCard = styled.View`
	background: lightgray;
	width: 95%;
	padding: 10px;
	border-radius: 8px;
	margin: 0 auto 20px auto;
`;

const DateGroupWrapper = styled.Text`
	font-weight: bold;
	font-size: 15px;
	margin-bottom: 8px;
`;

const PostText = styled.Text`
	color: white;
`;

const Date = styled.Text``;

const GroupName = styled.Text``;

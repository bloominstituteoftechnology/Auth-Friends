import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function FriendList(props) {
	const { friends } = props;

	return (
		<Container>
			<CardColumns>
				{friends.map((friend) => (
					<Card key={friend.id}>
						<Card.Body>
							<Card.Title>{friend.name}</Card.Title>
							<Card.Subtitle>{friend.age} years old</Card.Subtitle>
							<Card.Text>{friend.email}</Card.Text>
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		</Container>
	);
}

export default FriendList;

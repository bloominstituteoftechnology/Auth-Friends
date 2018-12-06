import React from 'react';
import { Section, H2, H3, Button, Div } from './../styles';

const Friend = (props) => {
	return (
		<Div>
			<Section
				selected={props.selected}
				onClick={() => props.toggleSelected(props.index)}
			>
				<H2>{props.friend.name}</H2>
				<H3>Age: {props.friend.age}</H3>
				<H3>Email: {props.friend.email}</H3>
			</Section>
			<Button
				onClick={(event) => {
					event.preventDefault();
					return props.deleteFriend(props.id);
				}}
			>
				Delete Friend
			</Button>
		</Div>
	);
};

export default Friend;

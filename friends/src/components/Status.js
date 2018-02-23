import React from 'react';

import '../styles/Status.css';

export default function Status(props) {
	let statusMessage = '';

	if (props.status.fetchingFriends) statusMessage = 'GETTING FRIEND LIST';
	else if (props.status.savingFriends) statusMessage = 'ADDING FRIEND';
	else if (props.status.updatingFriend) statusMessage = 'UPDATING FRIEND INFO';
	else if (props.status.deletingFriend) statusMessage = 'REMOVING FRIEND';
	else if (props.status.error) statusMessage = props.status.error;
	else statusMessage = 'OK';

	return (
		<div className="Status">
			<div className="StatusBar">
				<div className="StatusMessage">STATUS: {statusMessage}</div>
			</div>
		</div>
	);
}

import React from 'react';
import '../styles/EditFriend.css';

export default function EditFriend(props) {
	const handleInputChange = e => {
		props.handleEditFriendInput(e.target.name, e.target.value);
	};
	console.log(props);
	return (
		<div className="EditFriend">
			<div>
				<div className="EditingFriend">
					<button
						className="CancelEditFriendButton"
						onClick={props.editFriendButtonClicked}
					>
						cancel
					</button>

					<form className="InputForm">
						<input
							className="AddFriendInput"
							onChange={handleInputChange}
							type="text"
							name="name"
							value={props.editName}
						/>

						<input
							className="AddFriendInput"
							onChange={handleInputChange}
							type="number"
							min="1"
							name="number"
							value={props.editAge}
						/>

						<input
							className="AddFriendInput"
							onChange={handleInputChange}
							type="email"
							name="email"
							value={props.editEmail}
						/>

						<input
							className="editFriendConfirmButton"
							type="button"
							value={`edit ${props.editName}`}
							onClick={props.editFriend}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

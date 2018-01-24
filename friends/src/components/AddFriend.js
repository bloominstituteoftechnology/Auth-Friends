import React from 'react';
import '../styles/AddFriend.css';

export default function AddFriend(props) {
	const handleInputChange = e => {
		props.handleAddFriendInput(e.target.name, e.target.value);
	};

	return (
		<div className="AddFriend">
			<div>
				{props.isAddingFriend ? (
					<div className="IsAddingFriend">
						<button
							className="CancelAddFriendButton"
							onClick={props.addFriendButtonClicked}
						>
							cancel
						</button>

						<form className="InputForm">
							<input
								className="AddFriendInput"
								onChange={handleInputChange}
								type="text"
								name="name"
								value={props.addFriendText}
								placeholder="name"
							/>

							<input
								className="AddFriendInput"
								onChange={handleInputChange}
								type="number"
								min="1"
								name="number"
								value={props.addFriendText}
								placeholder="age"
							/>

							<input
								className="AddFriendInput"
								onChange={handleInputChange}
								type="email"
								name="email"
								value={props.addFriendText}
								placeholder="email"
							/>

							<input
								className="AddFriendConfirmButton"
								type="button"
								value="submit"
								onClick={props.addFriend}
							/>
						</form>
					</div>
				) : (
					<button
						className="AddFriendButton"
						onClick={props.addFriendButtonClicked}
					>
						add friend
					</button>
				)}
			</div>
		</div>
	);
}

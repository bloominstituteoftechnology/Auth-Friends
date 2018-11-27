import React from 'react';

const IndividualFriend = props => {
	console.log('props=' + props.friend);
	return (
		<form onSubmit={props.submitHandler}>
			<input
				type="text"
				name="name"
				value={props.friendName}
				onChange={props.changeHandlerName}
			/>
			<br />
			<input
				type="number"
				name="age"
				value={props.friendAge}
				onChange={props.changeHandlerAge}
			/>
			<br />
			<input
				type="email"
				name="email"
				value={props.friendEmail}
				onChange={props.changeHandlerEmail}
			/>
			<br />
			<button name="submit">SubmitChange</button>
			<button type="button" onClick={props.deleteHandler} name="delete">
				DeleteFriend
			</button>
		</form>
	);
};

export default IndividualFriend;

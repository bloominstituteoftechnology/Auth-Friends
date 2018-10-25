import React from 'react';

const FriendsForm = (props) => {
	return (
		<div className="form-wrapper">
			<form action="">
				<input type="text" onChange={props.formHandler} name="name" placeholder="Name.." />
				<input type="text" onChange={props.formHandler} name="age" placeholder="Age.." />
				<input type="text" onChange={props.formHandler} name="email" placeholder="Email.." />
				<button onClick={props.addNewFriend} name="Submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default FriendsForm;

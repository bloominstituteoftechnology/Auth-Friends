import React, { Component } from 'react';

// const FriendList = (props) => {
//     return (
//         <h1>name: {props.friend.name} email: {props.friend.email} age: {props.friend.age}</h1>
//     );
// }
const btnStyle = {
	cursor: 'pointer',
    padding: 8,
    // margin: 20
};
const dbtn = {
	color: 'red',
	cursor: 'pointer',
	padding: 8,
	fontWeight: 'bold',
	margin: 10
}
const abtn = {
	color: 'blue',
	cursor: 'pointer',
	padding: 8,
	fontWeight: 'bold',
	margin: 10
}


class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUpdateNote: false
		};
	}
	showUpdateNote = () => {
		this.setState({ showUpdateNote: !this.state.showUpdateNote });
    };
    handleTextInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
    updateFriend = (FriendID) => {
		
        const friend = { name: this.state.Name, email: this.state.Email, age: this.state.Age };
        console.log('EDIT FORM INPUT: name,email,age, :', friend,FriendID,FriendID,FriendID);
        this.props.updateFriend(FriendID, friend);
        // this.props.getAJAX()
		
    };
    deleteFriend = (FriendID) => {
	
        this.props.deleteFriend(FriendID);
        // this.props.getAJAX()

	};
	render() {
        const { id, name, age, email } = this.props.friend;
        console.log('ID of friend: ',id,name)
		return (
			<div>
				{/* <h1>
					name: {this.props.friend.name} email: {this.props.friend.email} age: {this.props.friend.age}
				</h1> */}
				<button onClick={this.showUpdateNote} style={btnStyle}>
					Update Friend Details
				</button>
                {this.state.showUpdateNote ? (
						<div>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={name}
								name="Name"
								value={this.state.Name}
							/>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={email}
								name="Email"
								value={this.state.Email}
							/>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={age}
								name="Age"
								value={this.state.Age}
							/>
							<button onClick={() => this.updateFriend(id)} style={abtn}>Save Friend Details</button>
							<button onClick={() => this.deleteFriend(id)} style={dbtn}>
								Delete Friend
							</button>
						</div>
					) : null}
			</div>
		);
	}
}
export default FriendList;

import React from "react";

class Profile extends React.Component {
	state = {
		friends: [
			{
				id: 1,
				name: "Joe",
				age: 24,
				email: "joe@lambdaschool.com",
			},
		],
    };
    
    

	handleChange = (e) => {
		this.setState({
			friends: {
				...this.state.friends,
				[e.target.name]: e.target.value,
			},
        });
        
    };
    
    addFriend = (e) => {
		console.log("Friends", this.state.friends);
		e.preventDefault();

		const newFriend = {
			id: Date.now(),
			name: "",
			age: "",
			email: "",
		};

		this.setState({
			friends: [...this.state.friends, newFriend],
		});
		console.log("friends after", this.state.friends);
	};



	handleSubmit = (e) => {
        e.preventDefault();
    }
	render() {
		return (
			<div>
				<h2>Profile Page is Here!</h2>
				<form onSubmit={this.handleSubmit}>
					<input 
						type='text'
						name='name'
						value={this.state.friends.name}
						placeholder='Name'
						onChange={this.handleChange}
					/>
					<input
						type='text'
						name='age'
						value={this.state.friends.age}
						placeholder='Age'
						onChange={this.handleChange}
					/>
					<input
						type='text'
						name='email'
						value={this.state.friends.email}
						placeholder='Email'
						onChange={this.handleChange}
					/>
					<button type='submit' onClick={this.addFriend}>
						Add a Friend
					</button>
				</form>
			</div>
		);
	}
}

export default Profile;




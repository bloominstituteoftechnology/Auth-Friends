import React from "react";

import { addNewFriend } from '../actions'

class AddNewFriendForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            name: '',
            age: 0,
            email: '',
        };
	}

	handleChange = event => {
		console.log(event.target.name, event.target.value);
		this.setState({
			[event.target.name]: event.target.value,
		});
    };
    
    handleSubmit = event => {
        event.preventDefault();
        console.log('Button clicked')
        addNewFriend(this.state);
        console.log(this.state)
        this.setState({
            name: '',
            age: 0,
            email: '',
        })
    }

	render() {
		return (
			<div className="add-new-friend-form-wrapper">
				<form className="add-new-friend-form" onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						type="text"
						name="name"
						value={this.state.name}
                        placeholder="name"
                        autocomplete="off"
					/>
					<input
						onChange={this.handleChange}
						type="number"
						name="age"
						value={this.state.age}
						placeholder="Age"
					/>
					<input
						onChange={this.handleChange}
						type="text"
						name="email"
						value={this.state.email}
						placeholder="Email"
					/>
                    <button type="submit">Add New Friend</button>

				</form>
			</div>
		);
	}
}

export default AddNewFriendForm;

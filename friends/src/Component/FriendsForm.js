import React from 'react';
import { addFriend } from '../Action';
import { connect } from 'react-redux';

class FriendsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			email: ''
		};
	}

	editFriend = () => {};

	formHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	addNewFriend = (e) => {
		e.preventDefault();
		const { name, age, email } = this.state;
		this.props.addFriend({ name, age, email });
		this.setState({ name: '', age: '', email: '' });
	};

	setUpUpdateForm = (e, friend) => {
		e.preventDefault();
		this.setState({
			friend,
			isEditing: true
		});
	};
	render() {
		return (
			<div className="form-wrapper">
				<form action="">
					<input
						type="text"
						onChange={this.formHandler}
						name="name"
						value={this.state.name}
						placeholder="Name.."
					/>

					<input
						type="text"
						onChange={this.formHandler}
						name="age"
						value={this.state.age}
						placeholder="Age.."
					/>

					<input
						type="text"
						onChange={this.formHandler}
						name="email"
						value={this.state.email}
						placeholder="Email.."
					/>
					<button onClick={this.addNewFriend} name="Submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		friends: state.friendsReducer.friends,
		error: state.error
	};
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
	addFriend
})(FriendsForm);

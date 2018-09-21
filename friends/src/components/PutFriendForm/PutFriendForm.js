// React
import React from 'react';

// Dependencies
import { connect } from 'react-redux';

// Actions
import { putNewFriend, getFriendsList } from '../../store/actions';

class PutFriendForm extends React.Component {
	state = {
		name: '',
		age: '',
		email: ''
	};

	handleInputChange = e => this.setState({ ...this.state, [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		new Promise(() => {
			this.props.putNewFriend({
				id: this.props.friend.id,
				name: e.target[0].value,
				age: Number(e.target[1].value),
				email: e.target[2].value,
			});
		})
			.then(this.props.getFriendsList())
			.then(this.props.history.push('/friendslist'));
	}

	render() {
		return(
			<form onSubmit = { this.handleSubmit }>
				Name:
				<input 
					type = 'text' 
					name = 'name' 
					value = { this.state.name } 
					placeholder = { this.props.friend.name } 
					onChange = { this.handleInputChange }
				/>

				Age:
				<input 
					type = 'number' 
					name = 'age' 
					value = { this.state.age } 
					placeholder = { this.props.friend.age } 
					onChange = { this.handleInputChange }
				/>
				
				Email:
				<input 
					type = 'text' 
					name = 'email' 
					value = { this.state.email } 
					placeholder = { this.props.friend.email } 
					onChange = { this.handleInputChange }
				/>

				<button>Save Changes to { this.props.friend.name }</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({});

export default connect (mapStateToProps, { putNewFriend, getFriendsList })(PutFriendForm);

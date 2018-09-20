// React
import React from 'react';

// Dependencies
import { connect } from 'react-redux';

// Actions
import { postNewFriend, getFriendsList } from '../../store/actions';

class PostFriendForm extends React.Component {
	state = {
		name: '',
		age: '',
		email: ''
	};

	handleInputChange = e => {
		this.setState({...this.state, [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		
		new Promise(() => {
			this.props.postNewFriend({
				name: e.target[0].value,
				age: Number(e.target[1].value),
				email: e.target[2].value,
			});
		})
			.then(this.props.getFriendsList())
			.then(this.props.history.push('/'));
	}

	render() {
		return(
			<form onSubmit = { this.handleSubmit }>
				Name:
				<input 
					type = 'text' 
					name = 'name' 
					value = { this.state.name } 
					onChange = { this.handleInputChange }
				/>

				Age:
				<input 
					type = 'number' 
					name = 'age' 
					value = { this.state.age } 
					onChange = { this.handleInputChange }
				/>
				
				Email:
				<input 
					type = 'text' 
					name = 'email' 
					value = { this.state.email } 
					onChange = { this.handleInputChange }
				/>

				<button>Add New Friend</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({});

export default connect (mapStateToProps, { postNewFriend, getFriendsList })(PostFriendForm);

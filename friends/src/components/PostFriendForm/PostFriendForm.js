// React
import React from 'react';

// Dependencies
import { connect } from 'react-redux';

// Actions
import { postNewFriend, getFriendsList } from '../../store/actions';

// Styles
import '../../css/PostFriendForm.css';

class PostFriendForm extends React.Component {
	state = {
		name: '',
		age: '',
		email: '',
		favColor: '',
		message: ''
	};

	handleInputChange = e => this.setState({...this.state, [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();
		let blankInput = false;

		for (let i = 0; i < e.target.length - 1; i++) {
			if (e.target[i].value === '') {
				blankInput = true;
				break;
			}
		}

		if (blankInput) return this.setState({...this.state, message: 'All fields must be filled out.'});
		
		new Promise(() => {
			this.props.postNewFriend({
				name: e.target[0].value,
				age: Number(e.target[1].value),
				email: e.target[2].value,
				favColor: e.target[3].value,
			});
		})
			.then(this.props.getFriendsList())
			.then(this.props.history.push('/friendslist'));
	}

	render() {
		return(
			<div className = 'post-friend-div'>
				<p>{ this.state.message }</p>

				<form className = 'post-friend-form' onSubmit = { this.handleSubmit }>
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

					Favorite Color:
					<input 
						type = 'text' 
						name = 'favColor' 
						value = { this.state.favColor } 
						onChange = { this.handleInputChange }
					/>

					<button className = 'submit-btn'>Add New Friend</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect (mapStateToProps, { postNewFriend, getFriendsList })(PostFriendForm);

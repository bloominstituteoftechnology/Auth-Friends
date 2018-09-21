// React
import React from 'react';

// Dependencies
import { connect } from 'react-redux';

// Actions
import { putNewFriend, getFriendsList } from '../../store/actions';

// Styles
import '../../css/PutFriendForm.css';

class PutFriendForm extends React.Component {
	state = {
		name: '',
		age: '',
		email: '',
		favColor: ''
	};

	handleInputChange = e => this.setState({ ...this.state, [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		new Promise(() => {
			this.props.putNewFriend({
				id: this.props.friend.id,
				name: e.target[0].value === '' ? undefined : e.target[0].value,
				age: e.target[1].value === '' ? undefined : Number(e.target[1].value),
				email: e.target[2].value === '' ? undefined : e.target[2].value,
				favColor: e.target[3].value === '' ? undefined : e.target[3].value,
			});
		})
			.then(this.props.getFriendsList())
			.then(this.props.history.push('/friendslist'));
	}

	render() {
		return(
			<div className = 'put-friend-form-div'>
				<form className = 'put-friend-form' onSubmit = { this.handleSubmit }>
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

					Favorite Color:
					<input 
						type = 'text' 
						name = 'favColor' 
						value = { this.state.favColor } 
						placeholder = { this.props.friend.favColor } 
						onChange = { this.handleInputChange }
					/>

					<button className = 'submit-btn'>Save Changes to { this.props.friend.name }</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect (mapStateToProps, { putNewFriend, getFriendsList })(PutFriendForm);

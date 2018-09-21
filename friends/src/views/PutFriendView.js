// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import axios from 'axios';
import { connect } from 'react-redux';

// Actions
import { deleteFriend, getFriendsList } from '../store/actions';

// Styles
import '../css/PutFriendView.css';

class PutFriendView extends React.Component {
	state = {};

	handleDeleteFriend = e => {
		e.preventDefault();

		new Promise(() => {
			this.props.deleteFriend(this.state.id);
		})
			.then(this.props.getFriendsList())
			.then(this.props.history.push('/friendslist'));
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/friends/${ this.props.match.params.id }`)
			.then(res => this.setState(res.data))
			.catch(err => console.log(err));
	}

	render() {
		return(
			<div className = 'put-friend-container'>
				<div className = 'put-friend-div'>
					<p>Name: { this.state.name }</p>
					<p>Age: { this.state.age }</p>
					<p>Email: { this.state.email }</p>
					<p>Favorite Color: { this.state.favColor }</p>

					<button><Link to = { `/friendslist/${this.state.id}/edit` }>Edit</Link></button>

					<button className = 'delete-btn' onClick = { this.handleDeleteFriend }>Delete</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect (mapStateToProps, { deleteFriend, getFriendsList })(PutFriendView);

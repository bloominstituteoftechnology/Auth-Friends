// React
import React from 'react';

// Dependencies
import axios from 'axios';
import { connect } from 'react-redux';

// Components
import PutFriendForm from '../components/PutFriendForm/PutFriendForm';

class PutFriendFormView extends React.Component {
	state = {
		id: '',
		name: '',
		age: '',
		email: '',
		favColor: ''
	};

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/friends/${ this.props.match.params.id }`)
			.then(res => this.setState(res.data))
			.catch(err => console.log(err));
	}

	render() {
		return(
			<div>
				{ this.props.puttingNewFriend ? <p>Updating friend...</p> : <PutFriendForm friend = { this.state } history = { this.props.history } /> }
			</div>
		);
	}
}

const mapStateToProps = state => ({
	puttingNewFriend: state.putFriendFormReducer.puttingNewFriend,
});

export default connect (mapStateToProps, null)(PutFriendFormView);

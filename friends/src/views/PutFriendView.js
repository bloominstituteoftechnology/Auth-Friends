// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import axios from 'axios';
import { connect } from 'react-redux';

class PutFriendView extends React.Component {
	state = {};

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/friends/${ this.props.match.params.id }`)
			.then(res => this.setState(res.data))
			.catch(err => console.log(err));
	}

	render() {
		return(
			<div>
				<p>Name: { this.state.name }</p>
				<p>Age: { this.state.age }</p>
				<p>Email: { this.state.email }</p>

				<Link to = { `/friendslist/${this.state.id}/edit` }>Edit</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect (mapStateToProps, null)(PutFriendView);

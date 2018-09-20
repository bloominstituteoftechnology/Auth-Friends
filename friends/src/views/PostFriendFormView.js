// React
import React from 'react';
import { Route } from 'react-router-dom';

// Dependencies
import { connect } from 'react-redux';

// Components
import PostFriendForm from '../components/PostFriendForm/PostFriendForm';

class PostFriendFormView extends React.Component {
	render() {
		return(
			<div>
				<Route exact path = '/postfriendform' render = { () => this.props.postingNewFriend ? <p>Adding your new friend...</p> : <PostFriendForm history = { this.props.history } /> } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	postingNewFriend: state.postFriendFormReducer.postingNewFriend,
});

export default connect (mapStateToProps, null)(PostFriendFormView);

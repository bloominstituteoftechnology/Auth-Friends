// React
import React from 'react';

// Dependencies
import { connect } from 'react-redux';

// Components
import PostFriendForm from '../components/PostFriendForm/PostFriendForm';

class PostFriendFormView extends React.Component {
	render() {
		return(
			<div>
				{ this.props.postingNewFriend ? <p>Adding your new friend...</p> : <PostFriendForm history = { this.props.history } /> }
			</div>
		);
	}
}

const mapStateToProps = state => ({
	postingNewFriend: state.postFriendFormReducer.postingNewFriend,
});

export default connect (mapStateToProps, null)(PostFriendFormView);

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
				<p>{ this.props.postingNewFriendError }</p>
				{ this.props.postingNewFriend ? <p>Adding your new friend...</p> : <PostFriendForm /> }
			</div>
		);
	}
}

const mapStateToProps = state => ({
	postingNewFriend: state.postFriendFormReducer.postingNewFriend,
	postingNewFriendError: state.postFriendFormReducer.postingNewFriendError,
});

export default connect (mapStateToProps, null)(PostFriendFormView);

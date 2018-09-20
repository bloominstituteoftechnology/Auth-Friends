// React
import React from 'react';

// Dependencies
import { connect } from 'react-redux';

// Components
import { Friend } from '../components/Friend/Friend';

const FriendsListView = props => {
	console.log('rerender friendslistview')
	return(
		<div>
			{ props.friendsList.map((friend, i) => 
				<Friend 
					key = { i } 
					friend = { friend } 
				/>
			) }
		</div>
	);
}

const mapStateToProps = state => ({
	friendsList: state.friendsListReducer.friendsList,
});

export default connect (mapStateToProps, null)(FriendsListView);

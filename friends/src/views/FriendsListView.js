// React
import React from 'react';
import { Route } from 'react-router-dom';

// Dependencies
import { connect } from 'react-redux';

// Components
import { Friend } from '../components/Friend/Friend';

// Styles
import '../css/FriendsListView.css';

const FriendsListView = props => {
	return(
		<div className = 'friends-list'>
			<Route exact path = '/friendslist' component = { () => 
				<div>
					{ props.friendsList.map((friend, i) => 
						<Friend 
							key = { i } 
							friend = { friend } 
						/>
					) }
				</div>
			} />
		</div>
	);
}

const mapStateToProps = state => ({
	friendsList: state.friendsListReducer.friendsList,
});

export default connect (mapStateToProps, null)(FriendsListView);

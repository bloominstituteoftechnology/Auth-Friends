// React
import React from 'react';

// Components
import { Friend } from '../components/Friend/Friend';

export const FriendsListView = props => {
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

import {
	FETCHING_FRIENDS,
	FRIENDS_FETCHED,
	ERROR,
	FRIENDS_SAVED,
	SAVING_FRIENDS,
	UPDATING_FRIEND,
	FRIEND_UPDATED,
	DELETING_FRIEND,
	FRIEND_DELETED
} from '../Actions/actions';

const initialState = {
	fetchingFriends: false,
	friendsFetched: false,

	friendsSaved: false, 
	savingFriends: false, 

	updatingFriend: false, 
	friendUpdated: false, 

	deletingFriend: false, 
	friendDeleted: false, 

	friends: [],
	error: null
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return Object.assign({}, state, { fetchingFriends: true, error: null });
		case FRIENDS_FETCHED:
			return Object.assign({}, state, {
				friends: [ ...state.friends, ...action.payload ],
				friendsFetched: true,
				fetchingFriends: false,
				error: null
			});
		//<<< >>>

		case FRIENDS_SAVED:
			return Object.assign({}, state, {
				friends: [ ...action.payload ],
				friendsSaved: true,
				savingFriends: false,
				error: null
			});

		case SAVING_FRIENDS:
			return Object.assign({}, state, { savingFriends: true, friendsSaved: false, error: null });
		//<<< >>>

		case UPDATING_FRIEND:
			return Object.assign({}, state, { updatingFriend: true, friendUpdated: false, error: null });

		case FRIEND_UPDATED:
			return Object.assign({}, state, {
				friends: [ ...action.payload ],
				friendUpdated: true,
				updatingFriend: false,
				error: null
			});
		//<<< >>>

		case DELETING_FRIEND:
			return Object.assign({}, state, { deletingFriend: true, friendDeleted: false, error: null });

		case FRIEND_DELETED:
			return Object.assign({}, state, {
				friends: [ ...action.payload ],
				friendDeleted: true,
				deletingFriend: false,
				error: null
			});
		//<<< >>>

		case ERROR:
			return Object.assign({}, state, {
				fetchingFriends: false,
				savingFriends: false,
				updatingFriend: false,
				deletingFriend: false,
				error: 'Error fetching Friends'
			});

		default:
			return state;
	}
};

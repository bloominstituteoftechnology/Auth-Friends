import {
	FETCHED,
	FETCHING,
	ERROR,
	ADDING_FRIEND,
	ADDED_FRIEND,
	DELETING_FRIEND,
	DELETED_FRIEND,
	EDITING_FRIEND,
	EDITED_FRIEND,
} from "../actions";

const initialState = {
	friends: [],
	fetching: false,
	adding: false,
	deleting: false,
	deleted: false,
	editing: false,
	edited: false,
	error: null
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				fetching: true
			};
		case ERROR:
			return {
				...state,
				error: action.errorMessage
			};
		case FETCHED:
			return {
				...state,
				friends: action.friends,
				fetching: false,
				error: null
			};
		case ADDING_FRIEND:
			return {
				...state,
				adding: true
			};
		case ADDED_FRIEND:
			return {
				...state,
				adding: false,
				added: true
			};
		case DELETING_FRIEND:
			return {
				...state,
				added: false,
				deleting: true,
			};
		// const newFriend = state.friends.filter(friend => {
		// 	return friend.id !== action.id
		// });
		// 	return state.friends = newFriend;
		// return Object.assign({}, state, {
		// 	friends: state.friends.filter((friend) => {
		// 		return friend.id !== action.id;
		// 	}),
		// 	deleting: true
		// });
		case DELETED_FRIEND:
			return {
				...state,
				deleting: false,
				deleted: true
			};
		case EDITING_FRIEND:
			return {
				...state,
				deleted: false,
				editing: true
			}
		case EDITED_FRIEND:
			return {
				...state,
				editing: false,
				edited: true,
			}
		default:
			return state;
	}
};

import { FETCHING_FRIENDS, FETCH_FRIENDS, ADD_FRIEND, EDITING_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions';

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

export const friendReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return {...state, fetchingFriends: true}

		case FETCH_FRIENDS:
			return {
				...state,
				friendsFetched: true,
				fetchingFriends: false,
				friends: action.payload,
			}

		case ADD_FRIEND:
			return {
				...state,
				friends: action.payload,
			}

		case EDITING_FRIEND:
			return {
				...state,
				updatingFriend: true,
			}
		
		case UPDATE_FRIEND:
			return {
				...state,
				updatingFriend: false,
				friends: action.payload,
			}
		
		case DELETE_FRIEND:
			return {
				...state,
				friends: action.payload,
			}

		default:
			return state;
	}
}
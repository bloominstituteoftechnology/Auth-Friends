import { ADD_FRIEND, UPDATE_FRIEND, FETCHING_FRIENDS, FETCH_FRIENDS } from '../actions';

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
		default:
			return state;
	}
}
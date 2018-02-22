import { ADD_FRIEND, UPDATE_FRIEND} from '.actions';

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

export const friendReducer = (state = initialState) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return {...state, fetchingFriends: true}

		case FETCH_FRIENDS:
			return {
				...state,
				friendFetched: true,
				fetchingFriends: false,
				friends: Object.keys(action.payload)
			}
	}
}
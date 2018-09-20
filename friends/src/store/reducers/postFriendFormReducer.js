import { 
	POSTING_NEW_FRIEND,
	POSTING_NEW_FRIEND_COMPLETE,
	POSTING_NEW_FRIEND_ERROR,
} from "../actions";

const initialState = {
	postingNewFriend: false,
	postingNewFriendError: null,
};

export const postFriendFormReducer = (state = initialState, action) => {
	switch(action.type) {
		case POSTING_NEW_FRIEND: {
			return { ...state, postingNewFriend: true};
		}
		case POSTING_NEW_FRIEND_COMPLETE: {
			return { ...state, postingNewFriend: false, postingNewFriendError: null};
		}
		case POSTING_NEW_FRIEND_ERROR: {
			return { ...state, postingNewFriend: false, postingNewFriendError: action.payload + '' }
		}
		default: {
			return state;
		}
	}
}

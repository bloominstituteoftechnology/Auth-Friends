import { 
	PUTTING_NEW_FRIEND,
	PUTTING_NEW_FRIEND_COMPLETE,
	PUTTING_NEW_FRIEND_ERROR,
} from "../actions";

const initialState = {
	puttingNewFriend: false,
	puttingNewFriendError: null,
};

export const putFriendFormReducer = (state = initialState, action) => {
	switch(action.type) {
		case PUTTING_NEW_FRIEND: {
			return { ...state, puttingNewFriend: true};
		}
		case PUTTING_NEW_FRIEND_COMPLETE: {
			return { ...state, puttingNewFriend: false, puttingNewFriendError: null};
		}
		case PUTTING_NEW_FRIEND_ERROR: {
			return { ...state, puttingNewFriend: false, puttingNewFriendError: action.payload + '' }
		}
		default: {
			return state;
		}
	}
}

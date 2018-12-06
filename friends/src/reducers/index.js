import { FETCHING, SUCCESS, FAILURE } from "../actions";

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
	error: null,
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				fetchingFriends: true,
				friendsFetched: false,
			};
		case SUCCESS:
			return {
				...state,
				friends: action.payload,
				friendsFetched: true,
				error: false,
				fetchingFriends: false,
			};
		case FAILURE:
			return {
				...state,
				error: action.payload,
				fetchingFriends: false,
				friendsFetched: false,
			};

		default:
			return state;
	}
};

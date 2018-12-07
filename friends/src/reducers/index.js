import { FETCHING, SUCCESS, FAILURE, ADD_NEW_FRIEND } from "../actions";

const initialState = {
	fetchingFriends: false,
	friendsFetched: false,
	friendsSaved: false,
	addingFriends: false,
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
		case ADD_NEW_FRIEND:
			return {
				...state,
                friends: [
                    action.payload,
                ],
				addingFriends: true,
			};

		default:
			return state;
	}
};

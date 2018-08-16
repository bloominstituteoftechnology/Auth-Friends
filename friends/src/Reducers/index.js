import { handleAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";

import {
	fetchFriendsRequest,
	fetchFriendsFailure,
	fetchFriendsSuccess,
	addFriendRequest,
	addFriendFailure,
	addFriendSuccess,
	deleteFriendsRequest,
	deleteFriendsFailure,
	deleteFriendsSuccess,
} from "../Actions";

const friends = handleActions(
	{
		[combineActions(
			fetchFriendsSuccess,
			addFriendSuccess,
			deleteFriendsSuccess,
		)]: (_, action) => action.payload,
	},
	[],
);

const isFetching = handleActions(
	{
		[fetchFriendsRequest]: () => true,
		[combineActions(fetchFriendsFailure, fetchFriendsSuccess)]: () => false,
	},
	false,
);

const isAdding = handleActions(
	{
		[addFriendRequest]: () => true,
		[combineActions(addFriendFailure, addFriendSuccess)]: () => false,
	},
	false,
);

const isDeleting = handleActions(
	{
		[deleteFriendsRequest]: () => true,
		[combineActions(deleteFriendsFailure, deleteFriendsSuccess)]: () =>
			false,
	},
	false,
);

export default combineReducers({
	friends,
	isFetching,
	isAdding,
	isDeleting,
});

// const intialState = { data: [], fetchingData: false, error: "" };

// export const reducer = (state = intialState, action) => {
// 	switch (action.type) {
// 		case fetchFriendsRequest:
// 			return { ...state, fetchingData: true };
// 		case fetchFriendsFailure:
// 			return { ...state, fetchingData: false };
// 		case fetchFriendsSuccess:
// 			return {
// 				...state,
// 				data: [...state.data, ...action.payload],
// 				fetchingData: false,
// 			};
// default:
// return state;
// 	}
// };

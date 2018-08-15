import { handleAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";

import {
	fetchFriendsRequest,
	fetchFriendsFailure,
	fetchFriendsSuccess,
} from "../Actions";

const friends = handleAction(
	fetchFriendsSuccess,
	(_, action) => action.payload,
	[],
);

const isFetching = handleActions(
	{
		[fetchFriendsRequest]: () => true,
		[combineActions(fetchFriendsFailure, fetchFriendsSuccess)]: () => false,
	},
	false,
);

export default combineReducers({
	friends,
	isFetching,
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

import * as types from './actionTypes';

const initialLoginState = {
	username: "",
	password: "",
};
export const loginReducer = (state = initialLoginState, action) => {
	switch (action.type) {
		case types.LOGOUT:
		case types.LOGIN:
			return initialLoginState;
		case types.ON_LOGIN_INPUT_CHANGE:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}
const initialLoadingState = true;
export const loadingReducer = (state = initialLoadingState, action) => {
	switch (action.type) {
		case types.LOGOUT:
			return initialLoadingState;
		case types.SET_LOADING:
			return action.payload;
		default:
			return state;
	}
}
const initialFriendsState = [];
export const friendsReducer = (state = initialFriendsState, action) => {
	switch (action.type) {
		case types.LOGOUT:
			return initialFriendsState;
		case types.SET_FRIENDS_LIST:
			return action.payload;
		default:
			return state;
	}
}
const initialAddFriendFormState = {
	id: null,
	name: "",
	age: "",
	email: "",
};
export const addFriendReducer = (state = initialAddFriendFormState, action) => {
	switch (action.type) {
		case types.LOGOUT:
		case types.SET_FRIENDS_LIST:
			return initialAddFriendFormState;
		case types.ON_FRIENDS_INPUT_CHANGE:
			return {
				...state,
				...action.payload
			}
		case types.EDIT_FRIEND:
			return {
				...state,
				...action.payload
			}
			
		default:
			return state;
	}
}
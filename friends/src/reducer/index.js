import {
	REQUEST_SENT,
	REQUEST_SUCCESS,
	REQUEST_ERROR,
	TOGGLE_SELECTED,
	DELETE_FRIEND,
	ADD_FRIEND,
	UPDATE_FRIEND
} from '../actions';

const initialState = {
	friends: [
		{
			id: 6,
			name: 'Mel',
			age: 30,
			email: 'abc123@email.com',
			selected: false
		}
	],
	
	error: null,
	requesting: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_SENT:
			return {
				...state,
				requesting: true
			};
		case REQUEST_ERROR:
			return {
				...state,
				requesting: false,
				error: action.payload
			};
		case REQUEST_SUCCESS:
			return {
				...state,
				error: null,
				requesting: false,
				friends: [...action.payload]
			};
		case TOGGLE_SELECTED:
			return {
				...state,
				friends: state.friends.map((friend, index) => {
					if (index === action.payload) {
						return { ...friend, selected: !friend.selected };
					} else {
						return friend;
					}
				})
			};
		case ADD_FRIEND:
			return {
				...state,
				error: null,
				requesting: false,
				friends: [...state.friends]
			};
		case DELETE_FRIEND:
			return {
				...state,
				error: null,
				requesting: false,
				friends: [...state.friends]
			};
		case UPDATE_FRIEND:
			return {
				...state,
				error: null,
				requesting: false,
				friends: [...state.friends]
			};
		default:
			return state;
	}
};

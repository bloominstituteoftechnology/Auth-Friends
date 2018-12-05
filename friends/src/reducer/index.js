import { REQUEST_SENT, REQUEST_SUCCESS, REQUEST_ERROR } from '../actions';

const initialState = {
	friends: [],
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
				friends: action.payload
			};
		default:
			return state;
	}
};

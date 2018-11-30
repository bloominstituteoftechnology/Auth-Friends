// Import Actions
import {	
		LOADING, 
		SUCCESS, 
		FAIL 
} from "../actions";

// Create initial state
const initialState = {
	friends: [{
		id: 1,
     	name: "",
      	age: 24,
      	email: ""
	}],
	error: null,
	loading: false
};

// Create reducer with switch statement
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case LOADING:
			return Object.assign({}, state, { loading: true });
		case SUCCESS:
			return Object.assign({}, state, {
				friends: [...state.friends, ...action.payload],
				loading: false
			});
		case FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.payload
			});
		default:
			return state;
	}
};

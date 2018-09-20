import { 
	FRIENDS_LIST_FETCH_COMPLETE,
} from "../actions";

const initialState = {
	friendsList: []
};

export const friendsListReducer = (state = initialState, action) => {
	switch(action.type) {
		case FRIENDS_LIST_FETCH_COMPLETE: {
			return state;
		}
		default: {
			return state;
		}
	}
}

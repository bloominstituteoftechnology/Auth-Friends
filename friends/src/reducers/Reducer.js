import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
    friends: [],
    isLoading: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoading: false,
                error: "",
            };
        case FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
}
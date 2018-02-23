import { IS_FETCHING, FRIEND_FETCHED, ERROR_FETCHING_FRIEND } from './actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    error: null
  };

  export const rootReducer = (state = initialState, action) 
    switch (action.type) {
        case IS_FETCHING:
            return { ...state, fetching: true};
        case FRIEND_FETCHED:
            return {
                ...state,
                fetched: true,
                fetching: false,
                friends: Object.keys(action.payload)
            }
        case ERROR_FETCHING_FRIEND:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
        default:
            return state;
    }

import { FETCHING_FRIENDS,  FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../actions';

const initialState = {
    friends : [],
    isFetching : false,
    error : null
};

export const friendFetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS :
            return {...state, isFetching : true};

        case FETCHING_FRIENDS_SUCCESS :
            return {...state, 
                isFetching : true,
                friends : [...state.friends, ...action.payload] 
            }; 

        case FETCHING_FRIENDS_FAILURE :
            return {...state, isFetching : false, error : action.payload};

        default:
            return state;
    }
};



import {FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE, SAVING_FRIEND, SAVING_FRIEND_SUCCESS, SAVING_FRIEND_FAILURE} from "../actions";

const initialState={
    friends:[],
    fetching: false,
    saving: false,
    error:null
};

export const friendsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHING:
        return {...state, fetching:true};
        case FETCHING_SUCCESS:
        return {...state, fetching: false, friends: [...state.friends, ...action.payload]};
        case FETCHING_FAILURE:
        return {...state, fetching:false, error:action.payload};
        
        case SAVING_FRIEND:
        return {...state, saving:true};
        case SAVING_FRIEND_SUCCESS:
        return {...state, saving:false, friends:[...action.payload]};
        case SAVING_FRIEND_FAILURE:
        return {...state, saving:false, error:action.payload};

        default:
        return state;
    }
}
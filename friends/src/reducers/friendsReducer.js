import {FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE} from "../actions";

const initialState={
    friends:[],
    fetching: false,
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
        default:
        return state;
    }
}
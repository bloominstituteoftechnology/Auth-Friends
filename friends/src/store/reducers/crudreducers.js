import { POST_FRIEND, GET_FRIEND } from '../actions/';

const initialState = {};

export const crudReducers = (state = initialState, action) => {
    switch(action.type) {
        case POST_FRIEND: 
            return {data: action.payload};
        case GET_FRIEND: 
            return {data: action.payload};
        default:
            return state;
    }
};

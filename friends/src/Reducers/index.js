import {FETCHING, FETCHED, ERROR} from '../Actions';

const initialState = {
    fetching: false,
    fetched: false,
    friends: [],
    error: null
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING: {
            console.log('fetching in reducers')
        }
        default: 
        return state;
    }
}

export default friendsReducer
import { SUCCESS, FAILURE, LOADING } from '../actions';

const initialState = {
    friends: [],
    loading: true,
    error: ''
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type){

        default: 
            return state;
    }
}
import {IS_FETCHING, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS, DELETE_FRIEND, UPDATE_FRIEND, SHOW_CREATE_FORM } from '../actions/Friends';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    deleteFriend: false,
    visible:false,
    singleFriend:[],
    updateVisible:false,
    createFormVisibility:false,
    error: null,
};

export const friends_reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            console.log('Fetching...');
            return {...state, fetching: true};
        case FRIENDS_FETCHED:
            return {
                ...state,
                friends: action.payload,
                fetched: true,
                fetching: false
            };
        case DELETE_FRIEND:
            return {...state, deleteFriend: true, visible:action.visible};
        case UPDATE_FRIEND:
            return {...state, singleFriend: action.payload,  updateVisible: action.updateVisible };
        case ERROR_FETCHING_FRIENDS:
            return {...state, fetching: false, error: action.payload};
        case SHOW_CREATE_FORM:
          return {...state, createFormVisibility: action.createFormVisibility }
        default:
            return state;
    }
};

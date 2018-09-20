import { 
    CRUD_ERROR, 
    POSTING_FRIEND, 
    POSTED_FRIEND,
    GETTING_FRIENDS, 
    GOT_FRIENDS
} from '../actions/';

const initialState = {
    postingFriend: false,
    postedFriend: false,
    gettingFriends: false,
    gotFriends: false,
    gettingSingleFriend: false,
    gotSingleFriend: false,
    puttingFriend: false,
    putFriend: false,
    deletingFriend: false,
    deletedFriend: false,
    friends: [],
    error: null
  };

export const crudReducers = (state = initialState, action) => {
    switch(action.type) {
        case CRUD_ERROR:
            console.error(action.payload);
            return {...state, postingFriend: false, gettingFriends: false, gettingSingleFriend: false, puttingFriend: false, deletingFriend: false, error: action.payload};
        case POSTING_FRIEND: 
            return {data: action.payload};
        case POSTED_FRIEND: 
            return {data: action.payload};
        case GETTING_FRIENDS: 
            console.log('GETTING_FRIENDS reducer')
            return {...state, gettingFriends: true};
        case GOT_FRIENDS: 
            console.log('GOT_FRIENDS reducer action payload', action.payload);
            return {...state, gettingFriends: false, gotFriends: true, friends: [...state.friends, ...action.payload]};
        default:
            return state;
    }
};

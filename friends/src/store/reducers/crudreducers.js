import { 
    CRUD_ERROR, 
    POSTING_FRIEND, 
    POSTED_FRIEND, 
    GETTING_FRIENDS, 
    GOT_FRIENDS, 
    PUTTING_FRIEND, 
    PUT_FRIEND, 
    DELETING_FRIEND, 
    DELETED_FRIEND
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
            return {...state, postedFriend: false, postingFriend: true};
        case POSTED_FRIEND: 
            return {...state, postedFriend: true, postingFriend: false, friends: action.payload};
        case GETTING_FRIENDS: 
            return {...state, gotFriends: false, gettingFriends: true};
        case GOT_FRIENDS: 
            return {...state, gettingFriends: false, gotFriends: true, friends: action.payload};
        case PUTTING_FRIEND:
            return {...state, putFriend: false, puttingFriend: true};
        case PUT_FRIEND:
            return {...state, putFriend: true, puttingFriend: false, friends: action.payload};
        case DELETING_FRIEND:
            return {...state, deletedFriend: false, deletingFriend: true};
        case DELETED_FRIEND:
            return {...state, deletedFriend: true, deletingFriend: false, friends: action.payload};
        default:
            return state;
    }
};

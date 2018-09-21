import { 
    CRUD_ERROR, 
    POSTING_FRIEND, 
    POSTED_FRIEND, 
    GETTING_FRIENDS, 
    GOT_FRIENDS, 
    // GETTING_SINGLE_FRIEND, 
    // GOT_SINGLE_FRIEND, 
    PUTTING_FRIEND, 
    PUT_FRIEND, 
    DELETING_FRIEND, 
    DELETED_FRIEND
} from '../actions/';

const initialState = {
    crudStates: {
        postingFriend: false,
        postedFriend: false,
        gettingFriends: false,
        gotFriends: false,
        // gettingSingleFriend: false,
        // gotSingleFriend: false,
        puttingFriend: false,
        putFriend: false,
        deletingFriend: false,
        deletedFriend: false,
        crudError: null
    },
    friends: []
  };

export const crudReducers = (state = initialState, action) => {
    switch(action.type) {
        case CRUD_ERROR:
            console.error('Error:', action.payload);
            return {...state, crudStates: {...state.crudStates, postingFriend: false, gettingFriends: false, /*gettingSingleFriend: false,*/ puttingFriend: false, deletingFriend: false, crudError: action.payload}};
        case POSTING_FRIEND: 
            return {...state, crudStates: {...state.crudStates, postedFriend: false, postingFriend: true}};
        case POSTED_FRIEND: 
            return {...state, crudStates: {...state.crudStates, postedFriend: true, postingFriend: false}, friends: action.payload};
        case GETTING_FRIENDS: 
            return {...state, crudStates: {...state.crudStates, gotFriends: false, gettingFriends: true}};
        case GOT_FRIENDS: 
            return {...state, crudStates: {...state.crudStates, gettingFriends: false, gotFriends: true}, friends: action.payload};
        // case GETTING_SINGLE_FRIEND:
        // case GOT_SINGLE_FRIEND:
        case PUTTING_FRIEND:
            return {...state, crudStates: {...state.crudStates, putFriend: false, puttingFriend: true}};
        case PUT_FRIEND:
            return {...state, crudStates: {...state.crudStates, putFriend: true, puttingFriend: false}, friends: action.payload};
        case DELETING_FRIEND:
            return {...state, crudStates: {...state.crudStates, deletedFriend: false, deletingFriend: true}};
        case DELETED_FRIEND:
            return {...state, crudStates: {...state.crudStates, deletedFriend: true, deletingFriend: false}, friends: action.payload};
        default:
            return state;
    }
};

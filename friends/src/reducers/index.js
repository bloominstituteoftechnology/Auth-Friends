
const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friends: [], 
    errors: null
}
 export const FriendsReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCHING_FRIENDS": 
            return Object.assign({}, state, {fetchingFriends: true}); 
        case "FRIENDS_FETCHED": 
            return Object.assign({}, state, {fetchingFriends: false, friendsFetched: true, friends: action.payload}); 
        case "ERROR": 
            return Object.assign({}, state, {fetchingData: false, errors: action.payload}); 
        default: 
            return state; 
    }
}
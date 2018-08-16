
const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friends: [], 
    errors: null
}
 export const FriendsReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "FETCHING_FRIENDS": 
        return Object.assign({}, state, {fetchingFriends: true}); 
        case "FRIENDS_FETCHED": 
        return Object.assign({}, state, {fetchingFriends: false, friendsFetched: true, friends: payload}); 
        case "ERROR": 
        return Object.assign({}, state, {fetchingData: false, errors: payload})
    }
}
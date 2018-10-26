import { FETCHING_FRIENDS, FRIENDS_FETCHED } from '../actions';


const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    //friendsSaved: false,
    //savingFriends: false,
    //updatingFriend: false,
    //friendUpdated: false,
    //deletingFriend: false,
    //friendDeleted: false,
    error: null
}
//this is what friend should look like
// friends: {
//     id: 1,
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com'
// }

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_FETCHED:
            return {
                friends: action.payload
            }
        default:
            return state
    }
}
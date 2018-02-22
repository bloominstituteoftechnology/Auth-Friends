import { GETTING_FRIENDS, FRIENDS_RECEIVED, ERROR_GETTING_FRIENDS, CREATE_FRIEND, FRIEND_CREATED, ERROR_CREATING_FRIEND } from '../actions/actions';

let initialState = {
    gettingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  }

 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GETTING_FRIENDS':
        return {...state, gettingFriends: true}
        case 'FRIENDS_RECEIVED':
        return {
            ...state,
            friendsFetched: true,
            gettingFriends: false,
            friends: action.payload,
        }
        case 'CREATE_FRIEND':
    }
}

export default reducer;
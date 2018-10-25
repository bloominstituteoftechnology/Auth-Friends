import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';

export default combineReducers({
    friendsReducer
})


// {
//     fetchingFriends: false,
//     friendsFetched: false,
//     friendsSaved: false,
//     savingFriends: false,
//     updatingFriend: false,
//     friendUpdated: false,
//     deletingFriend: false,
//     friendDeleted: false,
//     friends: [],
//     error: null
// }



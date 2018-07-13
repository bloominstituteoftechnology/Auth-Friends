import { FETCHING, FETCHED, ERROR, SAVING_FRIEND, FRIEND_SAVED } from '../actions';

const initialState = {
    fetchingFriends: false,
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

export default (state = initialState, action) => {
    switch (action.type) {
        case (FETCHING):
            return Object.assign({}, state, { fetchingFriends: true })
        case (FETCHED):
            return Object.assign({}, state, { fetchingFriends: false, friendsFetched: true, friends: action.payload })
        case (ERROR):
            return Object.assign({}, state, { error: action.error })
        case (SAVING_FRIEND):
            return Object.assign({}, state, { fetchingFriends: false, friendsFetched: false, savingFriends: true, friendsSave: false })
        case (FRIEND_SAVED):
            //get next id
            const currentIds = state.friends.map(friend => friend.id);
            const nextId = Math.max(...currentIds) + 1;
            let newFriends = state.friends.concat({...action.payload, id: nextId})
            console.log(newFriends);
                
            return Object.assign({}, state, {
                fetchingFriends: false, 
                friendsFetched: false,
                savingFriends: false,
                friendsSave: true, 
                friends: state.friends.concat({
                    id: nextId, 
                    name: action.payload.newName,
                    age: Number(action.payload.newAge),
                    email: action.payload.newEmail
                })
            })
        default:
            return state;
    }
} 

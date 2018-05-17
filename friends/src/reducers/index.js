import { FETCH_FRIENDS, FETCHING_FRIENDS, ADD_FRIEND, ADDING_FRIEND, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND, FRIEND_DELETED, ERROR } from '../actions'

const initialState = { friends: [], fetching: false, saved: false, saving: false, updating: false, updated: false, deleting: false, deleted: false, error: null }

export const friendReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) { 
        case FETCH_FRIENDS:
            return Object.assign({}, state, {
                friends: action.payload,
                fetching: false,
            });
        case FETCHING_FRIENDS:
            return Object.assign({}, state, { fetching: true });
        case ADDING_FRIEND:
            return Object.assign({}, state, {
                saving: true,
            })
        case ADD_FRIEND:
            return Object.assign({}, state, {
                friends: state.friends.concat(action.payload),
                saving: false,
                saved: true,
            })
        case UPDATING_FRIEND:
            return Object.assign({}, state, {
                updating: true
            });
        case FRIEND_UPDATED:
        const idForUpdate = action.payload.id;
            const updatedFriends = state.friends.map(friend => {
                if (friend.id === idForUpdate) {
                    friend = action.payload;
                    return friend;
                }
                return friend;
            });
            return Object.assign({}, state, {
                updating: false,
                updated: true,
                friends: updatedFriends,
            });
        case DELETING_FRIEND:  
            return Object.assign({}, state, {
                deleting: true,
            })
        case FRIEND_DELETED:
        const idForDelete = action.payload.id;
            const unscathedFriends = state.friends.filter(friend => {
                return (friend.id !== idForDelete)
            })
            return Object.assign({}, state, {
                deleted: true,
                deleting: false,
                friends: unscathedFriends,
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload,
            })
        default:
            return state;
    }
}




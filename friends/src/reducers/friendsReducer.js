import { ADD_FRIEND, FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR, ADDING_FRIEND } from '../actions/friendsActions';

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
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true,
            })
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {
                friends: action.payload,
                loading: false,
                error: '',
                fetchingFriends: false,
                friendsFetched: true,
                savingFriends: false,
                friendsSaved: true,
            })
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                loading: false,
            }) 
        case ADDING_FRIEND:
            return Object.assign({}, state, {
                savingFriends: true,
                friendsFetched: false,
            })
        // case ADD_FRIEND:
        //     return Object.assign({}, state, {
        //         friends: state.friends.concat([
        //             {
        //                 id: 
        //             }
        //         ]),
        //         savingFriends: false,
        //         friendsSaved: true,
        //     })
        default:
            return state;
    }
};
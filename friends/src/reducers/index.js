import { IS_FETCHING, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from '../actions';

const friendState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    // friendUpdated: false,
    deletingFriend: false,
    // friendDeleted: false,
    friends: [],
    error: null
}

const friends = (state = friendState, action) => {
    switch (action.type) {
        case IS_FETCHING:
          return {
            ...state, 
            fetchingFriends: true, 
        };
        case FRIENDS_FETCHED:
              return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: Object.keys(action.payload)
              };
            case ERROR_FETCHING_FRIENDS:
              return { ...state, fetchingFriends: false, error: action.payload };
        
        default:
            return state;
    }
}

export default friends;
// export default (friends = [], action) => {
//     switch (action.type) {
//         case NEW_FRIEND:
//             return [[...friends], action.payload];
//         default: 
//             return friends;
//     }
// };
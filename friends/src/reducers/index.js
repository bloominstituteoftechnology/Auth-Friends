import { 
    FETCHING_FRIENDS,
    FRIENDS_FETCH_SUCCESS,
    FRIENDS_FETCH_FAILURE,
    ADD_FRIEND,
    EDIT_FRIEND,
     } from '../actions';

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
  };

  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return { ...state, fetchingFriends: true };

        case FRIENDS_FETCH_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: [...state.friends, ...action.payload]
            };

        case FRIENDS_FETCH_FAILURE:
            return { ...state, fetchingFriends: false, error: action.payload };
        
        case ADD_FRIEND:
            return {
                ...state,
                friends: [ ...state.friends, { id: action.id, name: action.name, age: action.age, email: action.email }]
            };

        case EDIT_FRIEND: {
            const { id, ...rest } = action.payload;
            return {
                ...state,
                friends: state.friends.map(friend => {
                    return id === friend.id ? { ...friend, ...rest } : friend;
                })
            }
        }
        default:
            return state;        
    };
  };
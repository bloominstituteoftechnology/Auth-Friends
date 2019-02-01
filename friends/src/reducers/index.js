import 
{  
   FRIENDS_START,
   FRIENDS_SUCCESS,
   FRIENDS_FAILURE,

   ADD_NEW_FRIEND_START,
   ADD_NEW_FRIEND_SUCCESS,
   ADD_NEW_FRIEND_FAILURE

} from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    addFriends: false,
    error: null
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIENDS_START:
        return {
            ...state,
            fetchingFriends: true
        }

        case FRIENDS_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            fetchingFriends:false,
        }

        case FRIENDS_FAILURE:
        return {
            ...state,
            error: action.payload,
            fetchingFriends:false
        }

        case 'ADD_NEW_FRIEND_START':
        return {
            ...state,
            error: action.payload,
            fetchingFriends:true
        }

        case 'ADD_NEW_FRIEND_SUCCESS':
        return {
            ...state,
            fetchingFriends:false,
            error: null,
            friends: action.payload
        }

        case 'ADD_NEW_FRIEND_FAILURE':
        return {
            ...state,
            error: action.payload,
            fetchingFriends:false
        }


    default:
        return state;
    }
}

export default friendsReducer;
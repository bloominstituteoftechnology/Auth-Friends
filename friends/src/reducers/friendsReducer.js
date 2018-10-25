// import actions here
import 
{
    FETCHING_FRIENDS,
    FRIENDS_FETCHED ,
    FRIENDS_SAVED ,
    SAVING_FRIENDS ,
    UPDATING_FRIEND ,
    FRIEND_UPDATED ,
    DELETING_FRIEND ,
    FRIEND_DELETED,
} from '../actions'


const initialState = 
{
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [
        {
        "id" : 0,
        "name" : "Drew",
        "age" : 18,
        "email" : "drewsup123@gmail.com",
        }
    ],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    // console.log("friendReducer State: ", state)
    switch(action.type){
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends : true}

        case FRIENDS_FETCHED:
        console.log("Friends Reducer payload", action.payload)
            return {...state, friends:[...state.friends, ...action.payload],fetchingFriends : false}

        default : return state;
    }
}
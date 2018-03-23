import {
    IS_FETCHING, 
    FRIENDS_FETCHED, 
    ERROR_FETCHING_FRIENDS,
    IS_SAVING,
    FRIENDS_SAVED,
    ERROR_SAVING_FRIENDS,
    IS_UPDATING,
    FRIENDS_UPDATED,
    ERROR_UPDATING_FRIENDS,
} from '../actions';

const initialState = {
    fetchingFriends: false, 
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false, 
    updatingFriends: false,
    friendUpdated: false,
    deletingFriends: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return {...state, fetchingFriends: true };
        case FRIENDS_FETCHED:
            return {...state, 
                    friendsFetched: true,
                    fetchingFriends: false,
                    friends: action.friends 
                };
        case ERROR_FETCHING_FRIENDS:
                return {...state, fetchingFriends: false, error: action.payload };
   
         case IS_SAVING:
            return {...state,
                    savingFriends: true,
                    friendsSaved: true,
            };

        case FRIENDS_SAVED:
            return {...state,
                    friends: action.friends, 
                    savingFriends: false,
                    friendsSaved: true,
            };

        case ERROR_SAVING_FRIENDS:
            return {...state,
                    savingFriends: false,
                    friendsSave: false,
                    error: action.payload
            };

        case IS_UPDATING:
            return {...state,
                    updatingFriends: true,
                    friendsUpdated: false,    
            };

        case FRIENDS_UPDATED:
            return {...state, 
                    friends: action.friends,
                    updatingFriends: false,
                    friendsUpdated: true,        
            };
        
        case ERROR_UPDATING_FRIENDS:
            return {...state,
                    updatingFriends: false,
                    friendsUpdated: false,
                    error: action.payload        
            };

            default:
                return state;
        }
    };


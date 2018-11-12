import { LOADING, ERROR, SUCCESS, ADDED_FRIEND, ADDING_FRIEND } from '../actions/action';

const initialState = {
    fetchingFriends: false,
    savingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
    
    friends: [],
    error: null
  }

  export const reducer = (previousState=initialState, action) => {
      switch(action.type) {
           case LOADING:
             return Object.assign({}, previousState, {fetchingFriends:true} );
        
           case SUCCESS:
              return Object.assign( {}, previousState, {friends: action.payload, fetchingFriends:false});

            case ADDING_FRIEND:
                return Object.assign({}, previousState, {savingFriends:true, fetchingFriends:false} );          
           case ADDED_FRIEND:
              return Object.assign( {}, previousState,
                     {friends: action.payload,
                      savingFriends: false,
                      fetchingFriends:false});

           case ERROR:
              return Object.assign( {}, previousState, {error: action.payload});
           default:
          return previousState;
      }
  }
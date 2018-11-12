import { LOADING, ERROR, SUCCESS, ADD_FRIEND } from '../actions/action';

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

  export const reducer = (previousState=initialState, action) => {
      switch(action.type) {
           case LOADING:
             return Object.assign({}, previousState, {fetchingFriends:true} );
        
           case SUCCESS:
              return Object.assign( {},
                    previousState, 
                    {friends: action.payload, 
                     friendsFetched: true,
                     fetchingFriends:false});
           case ADD_FRIEND:
              return Object.assign( {},
                    previousState, 
                    {friends: action.payload, 
                     friendsSaved: true});

           case ERROR:
              return Object.assign( {}, previousState, {error: action.payload});
           default:
          return previousState;
      }
  }
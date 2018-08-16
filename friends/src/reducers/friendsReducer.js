import { FETCH_FRIENDS, FETCHED_FRIENDS, ERROR} from '../actions';

const initialState = {    
    fetchingFriends: false,
    friendsFetched: false,
    friends: [],
    error: null
  };
  
  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FRIENDS :
        return  (
          {
            ...state,        
            fetchingFriends: true,
            friends: action.payload
          }  
        )           
  
      case FETCHED_FRIENDS:
        return (
            {
              ...state,        
              fetchingFriends: false,
              friendsFetched: true
            } 
        )
  
      case ERROR:
        return(
            {
              ...state,
              error: action.error
            }
          )
       
      default:
        return state;
    }
  };
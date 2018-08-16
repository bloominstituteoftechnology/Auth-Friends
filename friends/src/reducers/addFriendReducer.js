import { SAVE_FRIENDS, SAVED_FRIENDS, ERROR} from '../actions';

const initialState = {    
    friendsSaved: false,
    savingFriends: false,
    error: null,
    friends: []
  };
  
  export const addFriendReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_FRIENDS :
        return  (
          {
            ...state,        
            savingFriends: true, 
            friends: action.payload           
          }  
        )           
  
      case SAVED_FRIENDS:
        return (
            {
              ...state,        
              savingFriends: false,
              friendsSaved: true
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
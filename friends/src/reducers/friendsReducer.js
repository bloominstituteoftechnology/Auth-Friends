import { FETCH_FRIENDS, FETCHED_FRIENDS, SAVE_FRIENDS, SAVED_FRIENDS, ERROR} from '../actions';

const initialState = {    
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  friends: [],
  error: null,
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


import { FETCH_FRIENDS, FETCHED_FRIENDS, SAVE_FRIENDS, SAVED_FRIENDS, DELETING_FRIEND, DELETED_FRIEND, SELECT_FRIEND, UPDATING_FRIEND, UPDATED_FRIEND, ERROR} from '../actions';

const initialState = {    
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriend: false,
  deletingFriend: false,
  friendDeleted: false,
  updatingFriend: false,
  friendUpdated: false,
  friends: [],
  error: null,
  selectedId: null
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

    case SAVE_FRIENDS:
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

    case DELETING_FRIEND:
      return  (
        {
          ...state,        
          deletingFriend: true, 
          friends: action.payload           
        }  
      )           

    case DELETED_FRIEND:
      return (
        {
          ...state,        
          deletingFriend: false,
          friendDeleted: true
        } 
      )
      
    case SELECT_FRIEND:
      return (
        {
          ...state,
          selectedId: action.id,
          friends: state.friends.map(friend =>
            (friend.selected || friend.id === action.id)
            ? {...friend, selected: !friend.selected}
            : friend
          )
        }
      )
     
    case UPDATING_FRIEND:
      return  (
        {
          ...state,        
          updatingFriend: true, 
          friends: action.payload           
        }  
      )           

    case UPDATED_FRIEND:
      return (
        {
          ...state,        
          updatingFriend: false,
          friendUpdated: true
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


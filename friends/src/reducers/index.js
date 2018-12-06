// ActionType Imports
import { 
   START_FETCH,
   FETCH_SUCCESS,
   FETCH_FAIL
} from "../actions";


// Initial State 
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

// Reducer
 const reducer = (state = initialState, action) => {
    switch(action.type){
         case START_FETCH:
            return {
               ...state,
               fetchingFriends: true
            }
         
         case FETCH_SUCCESS: 
            return {
               ...state,
               fetchingFriends: false,
               friends: action.payload,
               error: null
            }

         case FETCH_FAIL:
            return {
               ...state,
               fetchingFriends: false,
               error: action.payload
            }
         default: 
            return state;
    }
}
 export default reducer; 
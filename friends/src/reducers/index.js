
import {FETCHING_FRIENDS_LOADING,
    FETCHING_FRIENDS_FAILURE, 
    FETCHING_FRIENDS_SUCCESS,
    CREATING_FRIENDS_LOADING,
    CREATING_FRIENDS_FAILURE, 
    CREATING_FRIENDS_SUCCESS} from '../actions/index.js'

const initialState = {
    friends: [],
    fetchingFriends: false,
    addingFriend :false,
    deletingFriend: false,
    error: null
  }

   const friendReducer = (prevState = initialState, action) =>{
      switch(action.type){
        case FETCHING_FRIENDS_LOADING:
            return Object.assign({}, prevState, {
                ...prevState, 
                fetchingFriends : true
            })
        case FETCHING_FRIENDS_SUCCESS:   
            return Object.assign({}, prevState, {
                ...prevState,
                fetchingFriends:false,
                friends : action.payload
            })
        case FETCHING_FRIENDS_FAILURE:
            return Object.assign({}, prevState, {
                ...prevState,
                fetchingFriends:false,
                error:action.payload,
            })                    
        default:
            return prevState
      }
  }
  export default friendReducer;
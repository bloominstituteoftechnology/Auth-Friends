import {NEW_FRIEND, GETTING_FRIENDS, SUCCESS, FAILURE} from '../actions';


const initialState = {
  friends: [],
  fetching: false,
  error: null
}

const friendsReducer = (state = initialState, action) => {
  console.log('action:', action)
  switch(action.type) {
    case GETTING_FRIENDS:
      return {
        ...state,
        fetching: true,
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case SUCCESS:
      console.log('state',state)
      return {
        ...state,
        fetching: false,
        friends: [...state.friends, ...action.payload]
      }


    default:
      return state;
  }

}


export default friendsReducer;

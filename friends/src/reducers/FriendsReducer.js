import {LOADING, GET_FRIENDS, ERROR} from '../actions/friendsActions'

const intialState = {

    friends: [],
    loading: false,
    error: ''
}

export const friendsReducer = ( state= intialState, action) => {

  switch(action.type){
    case LOADING:
    return {...state, loading: true}
    case ERROR:
    return { ...state,  error: action.errorMessage, loading: false}
    case GET_FRIENDS:
    return {...state, friends: action.payload, loading:false}
    default:
    return state
  }
}
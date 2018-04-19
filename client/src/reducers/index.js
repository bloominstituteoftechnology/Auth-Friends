import {
  FETCH_START,
  MULTI_FETCH_SUCCESS,
  SINGLE_FETCH_SUCCESS,
  FETCH_ERROR,
  UPDATING_FRIEND,
  UPDATED_FRIEND,
  CANCEL_UPDATE
} from '../actions'

import { combineReducers } from 'redux'

const friendsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case MULTI_FETCH_SUCCESS:
      return payload
    default:
      return state  
  }
}

const selectedFriendReducer = (state = null, { type, payload }) => {
  switch (type) {
    case SINGLE_FETCH_SUCCESS:
      return payload
    case CANCEL_UPDATE:
    case UPDATED_FRIEND:  
      return null
    default:
      return state  
  }
}

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return null  
    case FETCH_ERROR:
      return payload
    default:
      return state  
  }
}

const updatingFriendReducer = (state = false, { type, payload }) => {
  switch (type) {
    case UPDATING_FRIEND:
      return true
    case CANCEL_UPDATE:
    case UPDATED_FRIEND:  
      return false
    default:
      return state
  }
}

export default combineReducers({
  friends: friendsReducer,
  updatingFriend: updatingFriendReducer,
  selectedFriend: selectedFriendReducer,
  error: errorReducer
})
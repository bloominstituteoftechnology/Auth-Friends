import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'
import { apiReducer } from './apiReducer'

const rootReducer = combineReducers({
  friends: friendsReducer,
  api: apiReducer
})
export default rootReducer

import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'
import { apiReducer } from './apiReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  friends: friendsReducer,
  form: formReducer,
  api: apiReducer
})
export default rootReducer

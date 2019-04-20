import {combineReducers} from 'redux'
import {pictureReducer} from './picture'
import {loginReducer} from './login'
import {friendsReducer} from './friends'

export default combineReducers({
    pictureReducer,
    loginReducer,
    friendsReducer,
})
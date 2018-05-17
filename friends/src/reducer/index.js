import { combineReducers } from 'redux';
import { friendsReducer } from './reducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    friendsReducer,
    form: formReducer
})

export default rootReducer; 
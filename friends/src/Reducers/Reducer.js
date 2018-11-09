import { LOADING } from '../Actions/actions';
 const initialState = {
    friends: [{id: 0, name: "Ellie", age: 4, email: "tabbycat@yahoo.com"}],
    loading: false,
    error: ''
}
 export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {loading: true})
        default:
            return state
    }
} 
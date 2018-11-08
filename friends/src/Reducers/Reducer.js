import { LOADING } from '../Actions/actions';

const initialState = {
    friends: [ {id: 0, name: "Julie", age: 25, email: "juliejonak@gmail.com"} ],
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
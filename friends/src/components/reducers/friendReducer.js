import { FETCHING, FETCHED, ERROR } from '../actions';

// const initialState = {
//     friends :[],
//     fetching: false,
//     error: false,
//     editing: false
// }

export const Reducer = (state = {friends:[], fetching:false, error: false, editing: false}, action) => {
    switch(action.type){
        case FETCHED:
        return Object.assign({}, state,{friends: state.friends.concat(action.payload), fetching: false})
        case FETCHING:
        return Object.assign({}, state, {fetching: true})
        case ERROR:
        return Object.assign({}, state({error: true}))
        default:
        return state
    }
}


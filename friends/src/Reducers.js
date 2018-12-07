import {FETCHING,RESP_SUCCESS,RESP_FAILURE,ADDING} from "./Actions"
import reduceReducers from "reduce-reducers"

const initialState = {
    friends:[],
    error:null,
    fetching:false
}

const getFriends = (state=initialState,action) => {
    switch(action.type){
        case FETCHING:
            return {...state, fetching:true}
        case RESP_SUCCESS:
            return {...state, friends: action.payload, fetching:false}
        case RESP_FAILURE:
            return {...state, error: action.payload, fetching:false}
        default:
            return state;
    }
}

const add = (state=initialState,action) => {
    switch(action.type){
        case ADDING:
            return {...state}
        case RESP_SUCCESS:
            return {...state, friends: action.payload, fetching:false}
        case RESP_FAILURE:
            return {...state, error: action.payload, fetching:false}
        default:
            return state;
    }
}

const reducer = reduceReducers(getFriends,add,initialState)

export default reducer;
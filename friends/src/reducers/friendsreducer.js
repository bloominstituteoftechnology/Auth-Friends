
import {FETCH, SUCCESS, FAIL} from '../actions/actions'
const initialState = {
  friends: [],
  fetch: false,
  fail:""

};
export const frinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
    return Object.assign({},state,{fetch:true,friends:[],fail:""})
    case SUCCESS:
    return {...state,fetch:false,friends:action.payload,error:""}
    case FAIL:
    return {...state, fetch:false,friends:[], error: action.payload}
    default:
    return state;

    
  }
};

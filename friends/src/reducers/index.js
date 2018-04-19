import {PENDING, SUCCESS, ERRORS} from '../actions';


const initialState = {
  friends: [],
  pending: false,
  success: false,
  error: null

}
export const reducer = (state=initialState, action)=> {
switch (action.type) {
    case PENDING:
      return {...state, pending: true};
    case SUCCESS:
      return {...state, success: true, friends: action.payload, pending:false};
    case ERRORS:
      return {...state, pending: true};
    default:
    return state;

}

};

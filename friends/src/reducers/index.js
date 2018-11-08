import { LOADING, UPDATING, ERROR } from '../actions';

const initialState = {
  friends: [],
  error: '',
  loading: false
};

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case LOADING:
    case UPDATING:
    case ERROR:
    default:
      return state;
  }
};
import { FETCHING, UPDATING, DELETING, SUCCESS, FAILURE, ADDING, UPDATE_FORM } from '../actions';

const initialState = {

  friends: [],
  friendToUpdate: null,
  fetching: false,
  updating: false,
  deleting: false,
  adding: false,
  error: null

}

export default function reduce(state = initialState, action) {

  switch (action.type) {

    case FETCHING:
      return {...state, fetching: true}

    case UPDATING:
      return {...state, updating: true}

    case DELETING:
      return {...state, deleting: true}

    case ADDING:
      return {...state, adding: true}

    case SUCCESS:
      return {
        friends: action.payload,
        fetching: false,
        updating: false,
        deleting: false,
        adding: false,
        failed: false,
        friendToUpdate: null
      }

    case FAILURE:
      return {...state, error: action.payload}

    case UPDATE_FORM:
      console.log('yerr');
      return {...state, friendToUpdate: action.payload}

    default:
      return state;

  }

}

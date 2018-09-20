import { FETCHING_DATA, FETCHED_DATA, FETCHING_COMPLETE, FETCHING_ERROR } from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  saved: false,
  saving: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  friends: [
    {
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com',
    }
  ],
  error: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
    return {
      ...state,
      fetching: true
    }

    case FETCHED_DATA:
    return {
      ...state,
      friends: [
        ...state.friends,
        ...action.payload
      ]
    }

    case FETCHING_COMPLETE:
    return {
      ...state,
      fetching: false
    }

  case FETCHING_ERROR:
    return {
      ...state,
      error: action.payload
    }

    default:
      return state
  }
}

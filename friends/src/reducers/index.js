import { GET_FRIENDS } from '../actions';

const initialState = {
  friends: [],
  error: null
}

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {...state, }
  }
}
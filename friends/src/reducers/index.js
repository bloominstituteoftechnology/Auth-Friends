import { GET_FRIENDS } from '../actions';

const initialState = {

}

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {...state, }
  }
}
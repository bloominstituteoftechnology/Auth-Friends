import {
  FETCHING,
  SUCCESS,
  FAILURE,
  ADD_NEW_FRIEND,
  DELETE_FRIEND
} from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, isFetching: true};
    case SUCCESS:
      return {...state, friends: [...action.payload], isFetching: false};
    case FAILURE:
      return {...state, error: action.payload, isFetching: false};
    case ADD_NEW_FRIEND:
      return {...state, friends: [...action.payload]};
    case DELETE_FRIEND:
      return {...state, friends: [...action.payload]};
    default:
      return state;
  }
};

// export const addFriendReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NEW_FRIEND:
//       return {...state, friends: [...action.payload]};
//     default:
//       return state;
//   }
// };

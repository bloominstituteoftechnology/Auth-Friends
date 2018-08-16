import { ADD_NEW_FRIEND } from "../action";

const initialState = {
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_FRIEND:
      return Object.assign({}, state, {
        friends: [...state.friends, action.payload]
      });
    default:
      return state;
  }
};

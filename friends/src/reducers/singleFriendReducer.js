import { UPDATE_FRIEND, DATABASEADD_FRIEND } from '../actions';

const initialState = {
  friend: {},
  updateFriend: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FRIEND:
      return {
        ...state,
        friend: action.payload,
        updateFriend: !state.updateFriend
      };
    case DATABASEADD_FRIEND:
      console.log(action.payload);
      return {
        ...state,
        friend: action.payload
      };
    default:
      return state;
  }
};

const removeFriendsReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'REMOVING_FRIEND':
      return { ...state, removing: true, removed: false };

    case 'FRIEND_REMOVED':
      return {
        ...state,
        removed: true,
        removing: false,
        friends: action.payload,
      };

    case 'ERROR_REMOVING_FRIEND':
      return {
        ...state,
        removing: false,
        removed: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default removeFriendsReducer;
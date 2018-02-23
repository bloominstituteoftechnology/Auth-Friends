const updateFriendsReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'UPDATING_FRIEND':
      return { ...state, updating: true, updated: false };

    case 'FRIEND_UPDATED':
      return {
        ...state,
        updated: true,
        updating: false,
        friends: action.payload,
      };

    case 'ERROR_UPDATING_FRIEND':
      return {
        ...state,
        updating: false,
        updated: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default updateFriendsReducer;
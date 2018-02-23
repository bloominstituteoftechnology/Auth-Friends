const addFriendsReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'ADDING_FRIEND':
      return { ...state, adding: true, added: false };

    case 'FRIEND_ADDED':
      return {
        ...state,
        added: true,
        adding: false,
        friends: action.payload,
      };

    case 'ERROR_ADDING_FRIEND':
      return {
        ...state,
        adding: false,
        added: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default addFriendsReducer;
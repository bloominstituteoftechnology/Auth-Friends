const addFriendsReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'ADDING_FRIEND':
      return { ...state, loading: true };

    case 'ADDED_FRIEND':
      console.log('added friend');
      return {
        ...state,
        loaded: true,
        loading: false,
        friends: action.payload,
      };

    case 'ERROR_ADDING_FRIEND':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default addFriendsReducer;
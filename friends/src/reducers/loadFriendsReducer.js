const addFriendsReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'IS_LOADING_FRIENDS':
      return { ...state, loading: true };

    case 'FRIENDS_LOADED':
      console.log('loaded friend');
      return {
        ...state,
        loaded: true,
        loading: false,
        friends: action.payload,
      };

    case 'ERROR_LOADING_FRIENDS':
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
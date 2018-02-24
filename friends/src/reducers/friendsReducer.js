const initialState = {
  friends: [],
  error: null
}

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FRIENDS":
      return { ...state, friends: action.payload };
    case "UPDATE_FRIEND":
      return { ...state, friends: action.payload };
    case "DELETE_FRIEND":
      return { ...state, friends: action.payload };
    case "CREATE_FRIEND":
      return { ...state, friends: action.payload };
    case "ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default FriendsReducer;

export const initialState = {
  friends: [],
  isPushing: false,
  error: ''
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FRIENDS':
      return { ...state, friends: [...state.friends, action.payload] };
    case 'DELETE_LOGGED_IN_USER':
      return { ...state, isLoggedIn: [action.payload] };
    case 'START_PUSHING':
      return {
        ...state,
        friends: [...state.friends, action.payload],
        isPushing: true,
        error: ''
      };
    case 'PUSH_SUCCESS':
      return {
        ...state,
        friends: action.payload,
        isPushing: false,
        error: ''
      };
    case 'PUSH_FAILURE':
      return {
        ...state,
        isPushing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

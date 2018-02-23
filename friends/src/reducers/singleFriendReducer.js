const initialState = {
  friendSelected: {},
  showUpdate: false
}

const singleFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SINGLE_FRIEND":
      return { ...state, friendSelected: action.payload, showUpdate: false };
    case "TOGGLE_UPDATE_FRIEND":
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
}

<<<<<<< HEAD
export default singleFriendReducer;
=======
export default singleFriendReducer;
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611

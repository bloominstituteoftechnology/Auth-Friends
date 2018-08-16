import '../actions/index';
const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case ('FETCHINGFRIENDS'):

    return Object.assign({}, state, {
      fetchingFriends: true
    });
    case ('FRIENDSFETCHED'):
    return Object.assign({}, state, {
      fetchingFriends: false,
      friendsFetched:true,
      friends: action.payload
    });
    case ('ERROR'):
    return Object.assign({}, state, {
      fetchingFriends: false,
      error:action.payload
    });
    default:
      return state;
  }
};
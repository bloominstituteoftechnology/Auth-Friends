// import {} from '../Actions';


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
}
export const FriendsReduver = (state= initialState, action) => {

  switch(action.type) {


    case FETCH_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_WORKS:
      return {
        ...state,
        fetchingFriends: false,
        error:null,
        friends: action.payload
      };
    case FETCH_FAIL:
      return {
        ...state,
        fetchingFriends:false,
        error:true,
      };
    case POST_START:
      return {
        ...state,
        fetchingFriends: true,
      };
    case POST_GOOD:
      return {
        ...state,
        fetchingFriends: false,
        friends:Action.payload,
      };
    case POST_FAIL:
      return {
        ...state,
        fetchingFriends: false,
        error: true,};
    // case FETCH_SPECIFIC_START:
    //   return {};
    // case FETCH_SPECIFIC_GOOD:
    //   return {};
    // case FETCH_SPECIFIC_FAIL:
    //   return {
    //     ...state,
    //     fetchingFriends: false,
    //     error: true,};
    // case DELETE_SPECIFIC_START:
    //   return {};
    // case DELETE_SPECIFIC_GOOD:
    //   return {};
    // case DELETE_SPECIFIC_FAIL:
    //   return {
    //     ...state,
    //     fetchingFriends: false,
    //     error: true,};
    // case UPDATE_SPECIFIC_START:
    //   return {};
    // case UPDATE_SPECIFIC_GOOD:
    //   return {};
    // case UPDATE_SPECIFIC_FAIL:
    //   return {
    //     ...state,
    //     fetchingFriends: false,
    //     error: true,};
    // case :
    //   return {};
    default:
      return state;
  }
};
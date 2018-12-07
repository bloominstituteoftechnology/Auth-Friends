import {
  FETCHINGFRIENDS,
  FRIENDSFETCHED,
  FRIENDSSAVED,
  SAVINGFRIENDS,
  UPDATINGFRIEND,
  FRIENDUPDATED,
  DELETINGFRIEND,
  FRIENDDELETED
} from "../action";
const initState = {
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
export default (state = initState, action) => {
  console.log("reducer working, passing new state to store", action);
  switch (action.type) {
    case FETCHINGFRIENDS:
      return { ...state, fetchingFriends: !state.fetchingFriends };
    case FRIENDSFETCHED:
      console.log("*********", action);
      return {
        ...state,
        friends: action.payload,
        friendsFetched: !state.friendsFetched
      };
    case FRIENDSSAVED:
      console.log("frd saved");
      return { ...state, friends: action.payload };
    case SAVINGFRIENDS:
      console.log("frd saving");
      return { ...state, savingFriends: !state.savingFriends };
    case UPDATINGFRIEND:
      console.log("updating frd");
      break;
    case FRIENDUPDATED:
      console.log("frd updated");
      break;
    case DELETINGFRIEND:
      console.log("deleting frd");
      return { ...state, deletingFriend: !state.deletingFriend };
    case FRIENDDELETED:
      console.log("deleted frd");
      return { ...state, friends: action.payload };
    default:
      return state;
  }
};

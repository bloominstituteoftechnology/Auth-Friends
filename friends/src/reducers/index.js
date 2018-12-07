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
      return { ...state, friends: action.payload };
    case FRIENDSSAVED:
      console.log("frd saved");
      break;
    case SAVINGFRIENDS:
      console.log("frd saving");
      break;
    case UPDATINGFRIEND:
      console.log("updating frd");
      break;
    case FRIENDUPDATED:
      console.log("frd updated");
      break;
    case DELETINGFRIEND:
      console.log("deleting frd");
      break;
    case FRIENDDELETED:
      console.log("deleted frd");
      break;
    default:
      return state;
  }
};

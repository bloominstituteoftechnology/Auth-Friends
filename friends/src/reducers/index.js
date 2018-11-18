import   {
    FETCHING,
    FETCHED,
    SAVING,
    SAVED,
    UPDATING,
    UPDATED,
    DELETING,
    DELETED,
    FAILED
} from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    friendsSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [
        {
            id: 1,
            name: '',
            age: 24,
            email: '',
          }
    ],
    error: null
  }

  export default (state = {initialState}, action) => {
    switch(action.type) {
      case FETCHING: 
      default:
       return state;
    }
  }
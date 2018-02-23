import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS, CREATING_FRIEND, FRIEND_CREATED, ERROR_CREATING_FRIEND } from './actions';
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

export const rootReducer = (state = initialState, action) => {
  console.log('The action the reducer received was: ', action);
  switch (action.type) {

    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FRIENDS_FETCHED:
      console.log('Friends: ', action.payload);
      return {
        ...state,
        friendsFetched: true,
        fetchingFriends: false,
        friends: action.payload,
      };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetchingFriends: false, error: action.payload };

    case CREATING_FRIEND:
      return {...state, savingFriends: true};
    case FRIEND_CREATED:
      return {...state,
        savingFriends: false,
        friendsSaved: true,
        friends: Object.values(action.payload),
      };
    case ERROR_CREATING_FRIEND:
      return {};

    default:
      return state;
  }
  console.log('The new state is: ', state);
};
import { GET_FRIENDS, ERROR } from './actions/Actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
};

export const friends = (state = initialState, action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return {...state, fetchingFriends: true, friends: Object.keys(action.payload)};
        case ERROR: 
            return {...state, fetchingFriends: false, error: action.payload };
        default:
            return state;
    }
};

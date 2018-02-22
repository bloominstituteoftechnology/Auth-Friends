import { NEW_FRIEND } from '../actions';

const friendState = {
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

export default (friends = [], action) => {
    switch (action.type) {
        case NEW_FRIEND:
            return [[...friends], action.payload];
        default: 
            return friends;
    }
};
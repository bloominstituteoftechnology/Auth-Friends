//reducer

import {REQUESTTOADD,  ADDINGFRIEND, NOTADDED } from '../actions';

const initState = {
  friends: [],
  savingFriend: false,
  updatingFriend: false,
  friendUpdated: false,
  status: '',
}

export const newFriendReducer = (state = initState, action) => {
  switch (action.type) {
    case REQUESTTOADD:
      return Object.assign({}, state, {
        savingFriend: true,
        status: action.payload
      });
    case ADDINGFRIEND:
      return Object.assign({}, state, {
        savingFriend: false,
        friendUpdated: true,
        status: action.payload.status,
        friends: [...state.friends, action.payload.friends],
        count: state.count+1
      });
    case NOTADDED:
      return {
        friendUpdated: false,
        status: action.payload
      }
    default:
      return state;
  }
}

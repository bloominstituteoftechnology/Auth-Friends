import {FETCHING, FETCHED, ERROR, ADDING, ADDED, DELETED, DELETING} from '../actions';
const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendAdded: false,
  addingFriend: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friends: [],
  error: null
};
export const superReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return {...state, 
      fetchingFriends: true,
      friendsFetched: false,
    }

    case FETCHED:
    return {...state, 
      friends: action.payload,
      fetchingFriends: false,
      friendsFetched: true
    }

    case ERROR:
    return { ...state, 
      fetchingFriends: false,
      friendsFetched: false,
      error: 'ohhhh noo'
    }

    case ADDING:
    return {...state, 
      addingFriend: true,
      friendAdded: false,
    }
    case ADDED:
    return {...state, 
      friends: action.payload,
      addingFriend: false,
      friendAdded: true
    }

    case DELETING:
    return {
      deletingFriend: true
    }

    case DELETED:
    return { ...state,
      friends: action.payload,
      deletingFriend: false

    }

    default:
      return state;
  }
};

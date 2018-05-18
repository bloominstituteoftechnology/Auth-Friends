

const initialState = { 
    fetching: false,
    fetched: false,
    Adding: false,
    Added: false,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
    friends: [],
    error: null
  }

  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCHING_FRIENDS:
        return Object.assign({}, state, {friends: action.payload, fetching: true})

        case FETCHED_FRIENDS:
        return Object.assign({}, state, {fetching: false, fetched: true})

        case ADDING_FRIEND:
        return Object.assign({}, state, {adding: true})

        case FRIEND_ADDED:
        return Object.assign({}, state, {adding: false, added: true})

        case UPDATING_FRIEND:
        return Object.assign({}, state, {updating: true})

        case FRIEND_UPDATED:
        return Object.assign({}, state, {updating: false, updated: true})

        case DELETING_FRIEND:
        return Object.assign({}, state, {deleting: true})

        case FRIEND_DELETED:
        return Object.assign({}, state, {deleting: false, deleted: true})

    }
  }
  
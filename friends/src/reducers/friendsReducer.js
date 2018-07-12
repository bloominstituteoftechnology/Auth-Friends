import { combineReducers } from 'redux';
import { FETCH_SUCCESS } from '../actions/actions';
import { UPDATE_FRIEND_SUCCESS } from '../actions/actions';


const fillFriendsById = (state, action) => {
  const { payload: resultArr } = action;
  const newState = {...state}
  resultArr.forEach((friend) => {
  newState[friend.id] = friend;
});
return newState;
}


const byIdReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return fillFriendsById (state, action);
    }
    case UPDATE_FRIEND_SUCCESS: {
      return fillFriendsById (state, action);
    }
    default:
      return state;
  }
};

const allIdsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      const { payload: resultArr } = action;
      return [...state, ...resultArr.map(friend => friend.id)];
    }
    case UPDATE_FRIEND_SUCCESS: {
      const { payload: resultArr } = action;
      return [...resultArr.map(friend => friend.id)];
    }
    default:
      return state;
  }
};

const friendsReducer = combineReducers({allIds: allIdsReducer, byId: byIdReducer});

export default friendsReducer;

export const getFriends = (state) => {
  const { byId: byIdState, allIds: allIdsState } = state.friends;
  return allIdsState.map(id => byIdState[id]);
};
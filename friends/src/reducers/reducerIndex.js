import { combineReducers } from 'redux';
// import friends from './friendsReducer'
// import fetchState from './fetchStateReducer'
import { FETCH_START } from '../actions/actions';
import { FETCH_ERROR } from '../actions/actions';
import { FETCH_SUCCESS } from '../actions/actions';

const fetchStateReducer =  (state = 'resting', action) => {
  switch (action.type) {
    case FETCH_START:
      return 'fetching';
    case FETCH_SUCCESS:
      return 'resting';
    case FETCH_ERROR:
      return 'resting';
    default:
    return state;
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      const { payload: resultArr } = action;
      const newState = {...state}
      resultArr.forEach((friend) => {
        newState[friend.id] = friend;
      });
      return newState;
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      const { payload: resultArr } = action;
      const resultArrIds = resultArr.map(friend => friend.id);
      return [...state, ...resultArrIds];
    }
    default:
      return state;
  }
};

const friendReducer = (state, action) => {
  if (state === undefined) {
    return {allIds: allIds(state, action), byId: byId(state, action)};
  }
  return {allIds: allIds(state.allIds, action), byId: byId(state.byId, action)};
}

const reducer = combineReducers({friends: friendReducer, fetchState: fetchStateReducer});
export default reducer;


//Selectors
export { getFriends } from './friendsReducer';
export { getFetchState } from './fetchStateReducer';
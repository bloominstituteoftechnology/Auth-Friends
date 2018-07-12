// import { combineReducers } from 'redux';

// import { FETCH_START } from '../actions/actions'
// import { FETCH_ERROR } from '../actions/actions'
// import { FETCH_SUCCESS } from '../actions/actions'

// const byId = (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_SUCCESS: {
//       const { payload: resultArr } = action.payload;
//       const newState = {...state}
//       resultArr.forEach((friend) => {
//         newState[friend.id] = friend;
//       });
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// const allIds = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_SUCCESS: {
//       let { payload: resultArr } = action.payload;
//       resultArrIds = resultArr.map(friend => friend.id);
//       return [...state, ...resultArrIds];
//     }
//     default:
//       return state;
//   }
// };

// const friendsReducer = combineReducers({ byId, allIds });
// export default friendsReducer;

export const getFriends = (state) => {
  const { byId: byIdState, allIds: allIdsState } = state.friends;
  return allIdsState.map(id => byIdState[id]);
};
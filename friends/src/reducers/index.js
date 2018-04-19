import { FETCH, FETCHINGFRIENDS, FETCHEDFRIENDS, FETCHFAIL, FRIENDSSAVING, FRIENDSSAVED, SAVEFAIL } from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  friends: [],
  error: null
 }

 export const friendReducer = (state = initialState, action) => {
     switch (action.type) {
         case FETCHINGFRIENDS:
         return Object.assign({}, state, { fetchingFriends: true }); 
         case FETCHEDFRIENDS:
         return Object.assign({}, state, {
            friends: [...state.friends, ...action.payload],
            fetchingFriends: false,
         })
         case FETCHFAIL:
         return Object.assign({}, state, {
             fetchingFriends: false,
             error: 'Error fetching friends'
         })
         case FRIENDSSAVING:
         return Object.assign({}, state, {
             savingFriends: true
         });
         case FRIENDSSAVED:
         return Object.assign({}, state, {
            friends: [...action.payload],
             savingFriends: false,
             friendsSaved: true
         });
         case SAVEFAIL:
         return Object.assign({}, state, {
             savingFriends: false,
             error: action.payload
         });
         case FETCH:
         return {
             ...state,
             friends: [...action.payload],
             fetchingFriends: false,
             friendsFetched: true
         }
         default:
         return state;
     }
 };
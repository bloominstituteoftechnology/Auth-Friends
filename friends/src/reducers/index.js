import {
  FETCHING,
  FETCHED
} from "../actions";

const initialState = {
  friendsFetching: false,
  friendsFetched: false,
  friendsSaved: false,
  friendsSaving: false,
  friendsUpdating: false,
  friendsUpdated: false,
  friendsDeleting: false,
  friendsDeleted: false,
  friends: [],
  error: null
};

export const fetcher = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        friendsFetching: true
      });
    case FETCHED:
      return Object.assign({}, state, {
        friendsFetched: true,
        friendsFetching: false,
        friends: action.payload
      });
    default:
      return state;
  }
};

// export const saver = (state = initialState, action) => {
//   switch (action.type) {
//     case SAVING:
//       return Object.assign({}, state, {
//         friendsSaving: true
//       });
//     case SAVED:
//       return Object.assign({}, state, {
//         friendsSaved: true
//       });
//     default:
//       return state;
//   }
// };

// export const deleter = (state = initialState, action) => {
//     switch (action.type) {
//       case DELETING:
//         return Object.assign({}, state, {
//             friendsDeleting: true
//         });
//       case DELETED:
//         return Object.assign({}, state, {
//             friendsDeleted: true
//         });
//       default:
//         return state;
//     }
//   };

//   export const updater = (state = initialState, action) => {
//     switch (action.type) {
//       case UPDATING:
//         return Object.assign({}, state, {
//             friendsUpdating: true
//         });
//       case UPDATED:
//         return Object.assign({}, state, {
//             friendsUpdated: true
//         });
//       default:
//         return state;
//     }
//   };
  
  

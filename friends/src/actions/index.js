import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
// export const FRIENDS_SAVED = 'FRIENDS_SAVED';
// export const SAVING_FRIENDS = 'SAVING_FRIENDS';
// export const UPDATING_FRIEND = 'UPDATING_FRIEND';
// export const FRIEND_UPDATED = 'FRIEND_UPDATED';
// export const DELETING_FRIEND = 'DELETING_FRIEND';
// export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
// export const ERROR_SAVING_FRIENDS = 'ERROR_SAVING_FRIENDS';
// export const ERROR_UPDATING_FRIENDS = 'ERROR_UPDATING_FRIENDS';
// export const ERROR_DELETING_FRIENDS = 'ERROR_DELETING_FRIENDS';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    console.log("this is before everything");
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then( ({data}) => {
        dispatch({ type: FRIENDS_FETCHED, payload: data });
        //console.log("this is the data", response.data.friends);
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
      });
  };
};


// export const createFriend = newFriend => {
//   const friends = axios.post('http://localhost:5000/api/friends/create', newFriend ) ;
//   return dispatch => {
//     dispatch({ type: SAVING_FRIENDS });
//     friends
//       .then(response => getFriends())
//       .then(response => {
//         dispatch({ type: FRIENDS_SAVED });
//       })      
//       .catch(error => {
//         dispatch({ type: ERROR_SAVING_FRIENDS, payload: error });
//       });
//   };
// };


// export const updateFriend = newFriend => {
//   const friends = axios.put('http://localhost:5000/api/friends/update', newFriend ) ;
//   return dispatch => {
//     dispatch({ type: SAVING_FRIENDS });
//     friends
//       .then(response => getFriends())
//       .then(response => {
//         dispatch({ type: FRIENDS_SAVED });
//       })      
//       .catch(error => {
//         dispatch({ type: ERROR_SAVING_FRIENDS, payload: error });
//       });
//   };
// };

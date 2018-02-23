import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';


export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(response => {
        console.log('response', response);
        console.log('response.data', response.data)
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  }
}

export const saveFriends = (data) => {
  const friends = axios.post('http://localhost:5000/api/friends/create', data);
  return dispatch => {
    dispatch({ type: SAVING_FRIENDS });
    friends
      .then(response => {
        console.log('saveFriends response', response)
        console.log('saveFriends', data)
        dispatch({ type: FRIENDS_SAVED, payload: data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  }
}

// export const updateFriends = () => {
//   const friends = axios.put('http://localhost:5000/api/friends/update', data);
//   return dispatch => {
//     dispatch({ type: UPDATING_FRIEND});
//     friends
//       .then(response => {
//         dispatch({ type: FRIEND_UPDATED, payload: data })
//       })
//       .catch(error => {
//         dispatch({ type: ERROR, payload: error };)
//       });
//   }
// }

export const deleteFriend = (id) => {
  const friends = axios.delete(`http://localhost:5000/api/friends/delete/${id}`);
  return dispatch => {
    dispatch({ type: DELETING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: FRIEND_DELETED, payload: id })
        this.getFriends();
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  }
}
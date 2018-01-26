import axios from 'axios';

export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const ERROR = 'ERROR';

export const createFriend = (friend) => {
  const url = 'http://localhost:5000/api/friends/create';
  const addFriend = axios.post(url, friend)
    return dispatch => {
      dispatch({ type: ADDING_FRIEND });
      addFriend
        .then((response) => {
          dispatch({ type: FRIEND_ADDED, payload: response.data })
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err })
        })
    }
}

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: GETTING_FRIENDS });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIENDS_RECEIVED, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      });
  }
}
  
export const deleteFriend = (id) => {
  const deleteUrl = axios.delete('http://localhost:5000/api/friends/delete', {data: {id}});
  return dispatch => {
    dispatch({ type: DELETING_FRIEND });
    deleteUrl
      .then(({ data }) => {
        dispatch({ type: FRIEND_DELETED, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      });
  }
}

export const updateFriend = (friend) => {
  const putUrl = axios.put('http://localhost:5000/api/friends/update', friend);
  return dispatch => {
    putUrl
      .then(({data}) => {
        dispatch({ type: FRIEND_UPDATED, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
  }
}
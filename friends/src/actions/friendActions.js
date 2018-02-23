export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = (friendData) => {
  const promise = axios.get('http://localhost:5000/api/friends/get');
  return {
      type: GET_FRIENDS,
      payload: promise,
  };
};

export const addFriend = friend => {
  return {
    type: ADD_FRIEND,
    payload: friend,
  }
};

export const updateFriend = friend => {
  return {
    type: UPDATE_FRIEND,
    payload: index,
  }
};

export const deleteFriend = index => {
  return {
    type: DELETE_FRIEND,
    payload: index,
  }
};

export const ADD_FRIEND ='ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND';

export const addFriend = friendsList => {
  return {
    type: ADD_FRIEND,
    payload: friendsList,
  };
};

export const deleteFriend = friendsList => {
  return {
    type: DELETE_FRIEND,
    payload: friendsList.id,
  };
};

export const editFriend = friendsList => {
  return {
    type: EDIT_FRIEND,
    payload: friendsList.id,
  };
};
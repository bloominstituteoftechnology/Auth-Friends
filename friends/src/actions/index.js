export const UPDATE_TITLE = 'UPDATE_TITLE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const TOGGLE_FRIEND = 'TOGGLE_FRIEND';

export function updateTitle(newTitle) {
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}

export function addNewFriend(newFriend) {
  return {
    type: ADD_FRIEND,
    payload: newFriend
  };
}

export function toggleFriend(index) {
  return {
    type: TOGGLE_FRIEND,
    payload: index
  };
}

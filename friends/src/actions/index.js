import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR_SAVING_FRIENDS = 'ERROR_SAVING_FRIENDS';

// const initialState = {
//     fetchingFriends: false,  Getting Friends
//     friendsFetched: false,
//     savingFriends: false,    Adding Friends
//     friendsSaved: false,
//     updatingFriend: false,   Updating Friends
//     friendUpdated: false,
//     deletingFriend: false,   Deleting Friends
//     friendDeleted: false,
//     friends: [],
// }

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
      dispatch({ type: FETCHING_FRIENDS });
      friends
        .then(response => {
          dispatch({ type: FRIENDS_FETCHED, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
        });
    };
};

export const addFriend = (friend) => {
  const newFriend = axios.post('http://localhost:5000/api/friends/create', friend);
  console.log(newFriend)
  return dispatch => {
    dispatch({ type: SAVING_FRIENDS });
      newFriend
        .then(response => {
          console.log("is submit new friend working? : ", response)
          dispatch({ type: FRIENDS_SAVED, payload: response.data});
      })
        .catch(error => {
          dispatch({ type: ERROR_SAVING_FRIENDS, payload: error})
        })
  }
};

import axios from 'axios';

// fetchingFriends: false,
//   friendsFetched: false,
//   friendsSaved: false,
//   savingFriends: false,
//   updatingFriend: false,
//   friendUpdated: false,
//   deletingFriend: false,
//   friendDeleted: false,
//   friends: [],
//   error: null

export const fetchingAll = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_FRIENDS' });
    axios
      .get('http://localhost:5000/api/friends')
      .then(({ data }) => dispatch({ type: 'FRIENDS_FETCHED', payload: data }))
      .catch((error) => {
        dispatch({ type: 'ERROR', msg: 'error fetching all friends' });
      });
  };
};

export const fetchingSingle = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_FRIENDS' });
    axios
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(({ data }) => dispatch({ type: 'FRIENDS_FETCHED', payload: data }))
      .catch((error) => {
        dispatch({ type: 'ERROR', msg: 'error fetching friend' });
      });
  };
};

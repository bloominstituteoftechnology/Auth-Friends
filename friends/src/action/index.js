import axios from 'axios';

// fetchingFriends: false,
//   friendsFetched: false,
//   friendsSaved: false, //friends saved
//   savingFriends: false, // adding friend

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

export const addFriend = (friend) => {
  return (dispatch) => {
    dispatch({ type: 'ADDING_FRIEND' });
    axios
      .post('http://localhost:5000/api/friends/', friend)
      .then(
        ({ data }) =>
          dispatch({
            type: 'FRIENDS_SAVED',
            payload: { name: friend.name, age: friend.age, email: friend.email }
          })
        // payload is an object with 3 key value pairs
      )
      .catch((error) => {
        dispatch({ type: 'ERROR', msg: 'error saving friend' });
      });
  };
};

// export const deleteFriend = (id) => {
//   return (dispatch) => {
//     axios
//       .delete(`http://localhost:5000/api/friends/${id}`)
//   }
// }

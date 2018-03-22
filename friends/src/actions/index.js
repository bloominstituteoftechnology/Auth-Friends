import axios from 'axios'; // import axios package

export const FETCHING_FRIEND = 'FETCHING_FRIEND'; // declare action type variables and export
export const FETCHED_FRIEND  = 'FETCHED_FRIEND';
export const ERROR_FETCHING_FRIEND = 'ERROR_FETCHING_FRIEND';

export const CREATING_FRIEND = 'CREATING_FRIEND';
export const FRIEND_CREATED = 'FRIEND_CREATED';
export const ERROR_CREATING_FRIEND = 'ERROR_CREATING_FRIEND';

export const DELETING_FRIEND = 'DELETING_FRIEND'
export const FRIEND_DELETED = 'FRIEND_DELETED'
export const ERROR_DELETING_FRIEND = 'ERROR_DELETING_FRIEND'

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIEND });

    axios
        .get('http://localhost:5000/api/friends')
        .then(({data}) => {
            dispatch({ type: FETCHED_FRIEND, friends: data})
        })
        .catch(error => {
            dispatch({ type: ERROR_FETCHING_FRIEND, errorMessage: 'Error fetching friends'})
        });

};

export const postFriend = friend => dispatch => {
  dispatch({ type: CREATING_FRIEND });

  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: FRIEND_CREATED, friends: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR_CREATING_FRIEND, error: 'Error creating friend' });
    });
};

export const deleteFriend = (id) => dispatch => {
  dispatch({ type: DELETING_FRIEND});

  axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
          dispatch({ type: FRIEND_DELETED, friends: response.data})
      })
      .catch(err => {
          dispatch({ type: ERROR_DELETING_FRIEND, errorMessage: 'Error deleting friend' })
      });
};
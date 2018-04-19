import axios from 'axios';
import { ERROR_FRIENDS } from './actionTypes';
// import { DELETE_FRIEND } from './actionTypes'
import { fetchFriends } from './fetchFriends';

export const deleteFriend = id => {
    const friends = axios.delete(`http://localhost:5000/api/friends/${id}`);
    return dispatch => {
      friends
        .then(response => {
          dispatch(fetchFriends());
        })
        .catch(err => {
          dispatch({
            type: ERROR_FRIENDS,
            payload: 'ERROR Deleting Friend'
          });
        });
    };
};
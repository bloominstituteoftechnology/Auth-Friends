import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_ERROR = 'FETCHING_FRIENDS_ERROR';

export const fetchFriends = () => {
  // Set up actions here
  const friends = axios.get('/api/friends');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(
        response => {
          dispatch({
            type: FETCHING_FRIENDS_SUCCESS,
            payload: response.data
          });
        })
        .catch( error => {
          dispatch({ 
            type: FETCHING_FRIENDS_ERROR, 
            payload: "No friends found!"
          })
        })
        }
      )
  }
}
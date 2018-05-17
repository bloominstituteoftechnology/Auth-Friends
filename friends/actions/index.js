import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
      dispatch({ type: FETCHING_FRIENDS }); 
      getFriends
        .then(response => {
            dispatch({ type: FRIENDS_FETCHED, payload: response.data.name });
        })
        .catch(err => {
            dispatch({
                type: ERROR_FETCHING_FRIENDS,
                payload: 'Error Fetching Friends'
            });
        });
    };
};
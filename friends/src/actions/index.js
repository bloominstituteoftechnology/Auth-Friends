import axios from 'axios';

export const FETCHING_FRIENDS = 'fetching_friends';
export const FRIENDS_FETCHED = 'friends_fetched';
export const ERROR_FETCHING_FRIENDS = 'error_fetching_friends';

export const fetchFriends = URL => {
    const promise = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({ type: FETCHING_FRIENDS });
        promise
            .then(response => {
                console.log('RESPONSE', response);
                dispatch({ type: FRIENDS_FETCHED, payload: response.data.results });
            })
            .catch(err => {
                dispatch({
                    type: ERROR_FETCHING_FRIENDS,
                    payload: 'Error fetching friends'
                });
            });
    };
};





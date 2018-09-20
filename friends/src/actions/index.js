import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        axios
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
                dispatch({ type: FRIENDS_FETCHED, payload: res.data.results })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_ERROR })
            })
    };
};
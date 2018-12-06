import axios from 'axios';

export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH });
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            Window.alert(response);
            console.log(response);
            dispatch({ type: FETCH_SUCCESS, payload: response.data.results });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
};

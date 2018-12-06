import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';

const url = 'http://localhost:5000/friends/';

export const fetchFriends = () => dispatch => {
    axios
        .get(url)
        .then(response => {
            dispatch({ type: FETCH_FRIENDS, payload: response.data.message })
        })
        .catch(error => {
            console.log(error)
        });
}
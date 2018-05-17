import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';




export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000');
    return function(dispatch) {
        dispatch({type: FETCHING_FRIENDS});

        getFriends
            .then((response) => {
                dispatch({type: FRIENDS_FETCHED, payload: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
    }

}
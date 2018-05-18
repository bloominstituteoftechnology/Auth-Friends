import axios from 'axios';
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';


export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({ type: FETCHING });
        getFriends
            .then( response => {
                console.log('response', response)
                dispatch({ type: FETCHED, payload: response.data }
                );
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    }
}
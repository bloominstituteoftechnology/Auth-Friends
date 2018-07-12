import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const gettingFriend = () => {
    const getFr = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: FETCHING });
        getFr.then(response => {
            console.log('response: ', response.data);
            dispatch({ type: FETCHED, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        })
    }
}
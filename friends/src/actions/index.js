import axios from 'axios';

export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const getFriends = () => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios.get('http://localhost:5000/api/friends')
        .then( response => {
            dispatch({ type: SUCCESS, payload: response.data})
        })
        .catch( err => {
            dispatch({type: ERROR, error: 'ERROR FETCHING FRIENDS'})
        })
    }
}
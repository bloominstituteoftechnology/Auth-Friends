import axios from 'axios';

export const SUCCESS_FRIENDS = 'SUCCESS_FRIENDS';
export const PENDING_FRIENDS = 'PENDING_FRIENDS';
export const ERROR_FRIENDS = 'ERROR_FRIENDS';


export const fetchFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends')
      return dispatch => {
        dispatch( {type: PENDING_FRIENDS } );
        promise
        .then(response => {
            console.log(response);
            dispatch({ type: SUCCESS_FRIENDS, payload: response.data });
        })
        .catch(err => {
            dispatch({type: ERROR_FRIENDS, payload: 'Error Fetching Friends'})
        })
    }
}

export const postFriends = () => {
    const promise = axios.post('http://localhost:5000/api/friends')
      return dispatch => {
        dispatch( {type: PENDING_FRIENDS } );
        promise
        .then(response => {
            console.log(response);
            dispatch({ type: SUCCESS_FRIENDS });
        })
        .catch(err => {
            dispatch({type: ERROR_FRIENDS, payload: 'Error Fetching Friends'})
        })
    }
}
import axios from 'axios';
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERRORS = 'ERRORS';


export const getFriends = () => {
     const promise = axios.get ('http://localhost:5000/api/friends');
return (dispatch) => {
    dispatch ({ type: PENDING});
    promise
    .then(response => {
        console.log('response', response)
        dispatch({ type: SUCCESS, payload: response.data});
    })
    .catch(err => {
        dispatch({ type: ERRORS });
    });
};
};
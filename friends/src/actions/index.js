import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const CREATING_FRIEND= 'CREATING_FRIEND';
export const CREATE_FRIEND= 'CREATE_FRIEND';


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

export const createNewFriend = (newFr) => {
    const putNewFr = axios.post('http://localhost:5000/api/friends', newFr);
    return dispatch => {
        dispatch({ type: CREATING_FRIEND });
        putNewFr.then(response => {
            dispatch({ type: CREATE_FRIEND, payload: response.data})

        })
    }
}
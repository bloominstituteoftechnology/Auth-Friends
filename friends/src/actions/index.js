import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    const request = axios.get(`http://localhost:5000/api/friends`);

    return dispatch => {
        dispatch({type: FETCHING})

        request.then(res => {
            dispatch({type: FETCHED, payload: res.data})
            console.log(res.data, 'FRIENDS');
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}


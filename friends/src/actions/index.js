import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const POSTING = 'POSTING';
export const POSTED = 'POSTED';

export const fetchFriends = () => {
    const request = axios.get(`http://localhost:5000/api/friends`);

    return dispatch => {
        dispatch({type: FETCHING})

        request.then(res => {
            dispatch({type: FETCHED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}

export const addFriend = newFriend => {
    console.log(newFriend);

    const request = axios.post(`http://localhost:5000/api/friends`, newFriend);
    return dispatch => {
        dispatch({type: 'POSTING'});
        request.then(res => {
            dispatch({type: POSTED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        });
    }
}
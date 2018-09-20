import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'ADD_START';
export const ADD_COMPLETE = 'ADD_COMPLETE';
export const ADD_FAILURE = 'ADD_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_START });
    const promise = axios.get('http://localhost:5000/api/friends');

    promise
        .then(response => {
            dispatch({ type: FETCH_COMPLETE, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err});
        });
};

export const addNewFriend = friend => dispatch => {
    dispatch({ type: ADD_START });

    axios.post('http://localhost:5000/api/friends', friend)
        .then(response => {
            dispatch({ type: ADD_COMPLETE, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ADD_FAILURE, payload: err });
        })
}

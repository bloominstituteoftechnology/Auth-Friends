import axios from 'axios';

export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ADD_FRIEND = "ADD_FRIEND";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const ERROR = "ERROR";
export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const FRIENDS_SAVED = "FRIENDS_SAVED";

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({ type: FETCHING_FRIENDS, payload: true});
        getFriends
            .then(data => {
                console.log(data);
                dispatch({ type: FETCHED_FRIENDS, payload: data.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: true});
            })
    }
}

export const addFriend = (friend) => {
    const postFriends = axios.post("http://localhost:5000/api/friends", friend);
    return function(dispatch) {
        dispatch({type: SAVING_FRIENDS, payload: true});
        postFriends
            .then(res => {
                console.log(res);
                dispatch({type: ADD_FRIEND , payload: res.data});
                dispatch({type: FRIENDS_SAVED, payload: true});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: true})
            })
    }
}


import axios from 'axios';

export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ADD_FRIEND = "ADD_FRIEND";

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        // dispatch({ type: FETCHING_FRIENDS });
        getFriends
            .then(data => {
                console.log(data);
                dispatch({ type: FETCHED_FRIENDS, payload: data.data });
            })
            // .catch(err => {
            //     dispatch({ type: ERROR, payload: err});
            // })
    }
}

export const addFriend = (friend) => {
    const postFriends = axios.post("http://localhost:5000/api/friends", friend);
    return function(dispatch) {
        postFriends
            .then(res => {
                console.log(res);
                dispatch({type: ADD_FRIEND , payload: res.data});
            })
    }
}


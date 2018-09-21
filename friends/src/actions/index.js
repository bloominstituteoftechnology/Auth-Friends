import axios from 'axios';

export const ERROR = "ERROR";
export const GET_FRIENDS = "GET_FRIENDS";
export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const CREATE_FRIEND = "CREATE_FRIEND";
export const CREATING_FRIEND = "CREATING_FRIEND";

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    console.log(friends);
    return dispatch => {
        dispatch({type: GETTING_FRIENDS});

        friends
            .then(response => {
                dispatch({type: GET_FRIENDS, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err});
            })
    }
}

export const createFriend = friend => {
    const newFriend = axios.post('http://localhost:5000/api/friends/create', friend);
    return dispatch => {
        dispatch({type: CREATING_FRIEND});

        newFriend
            .then(({data}) => {
                dispatch({type: CREATE_FRIEND, payload: data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err});
            })
    }
}
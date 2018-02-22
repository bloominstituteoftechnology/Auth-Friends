import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const ERROR = 'ERROR';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: IS_FETCHING });
        friends
            .then(response => {
                dispatch({ type: FRIENDS_FETCHED, payload: response });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });  
    };
};

export const addFriend = friend => {
    const newFriend = axios.post('http://localhost:5000/api/friends/create', friend);
    return dispatch => {
        dispatch({ type: ADDING_FRIEND });
        addFriend
            .then(({ data }) => {
                dispatch({ type: FRIEND_ADDED, payload: data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });  
    };
}
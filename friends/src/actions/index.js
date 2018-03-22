import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const ERROR = 'ERROR';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
        dispatch({ type: IS_FETCHING });
        friends
            .then(response => {
                dispatch({ type: FRIENDS_FETCHED, payload: response.data });
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
        newFriend
            .then(({ data }) => {
                dispatch({ type: FRIEND_ADDED, payload: data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });  
    };
};

export const deleteFriend = friend => {
    const byeFriend = axios.delete('http://localhost:5000/api/friends/delete', friend);
    return dispatch => {
        dispatch({ type: DELETING_FRIEND });
        byeFriend
            .then(({ data }) => {
                dispatch({ type: FRIEND_DELETED, payload: data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}
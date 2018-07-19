import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIEND_FETCHED = 'FRIEND_FETCHED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const SAVED_FRIEND = 'SAVED_FRIEND';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const UPDATED_FRIEND = 'UPDATED_FRIEND';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const DELETED_FRIEND = 'DELETED_FRIEND';
export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/friends';
export const fetchFriends = friends => {
    const promise = axios.get(URL);
    return (dispatch) => {
        dispatch({ FETCHING_FRIENDS });
        promise
            .then(({ data }) => {
                dispatch({ type: FRIEND_FETCHED, payload: data.friends });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            })
    };
};

export const deleteFriend = id => {
    const promise = axios.delete(URL);
    return (dispatch) => {
        dispatch({ DELETING_FRIENDS });
        promise
        .then (({ data }) => {
            dispatch({ type: DELETED_FRIEND, payload: data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        })
}
}

export const saveFriend = () => {
 const promise = axios.post(URL);
 return ()
}

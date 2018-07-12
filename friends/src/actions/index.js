import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const fetchFriends = URL => {
    const promise = axios.get(URL);
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        promise
            .then(response => {
                dispatch({ type: FRIENDS_FETCHED, payload: response.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: ERROR_FETCHING, payload: err})
            })
    }
}

export const postFriend = (URL, friend) => {
    const post = axios.post(URL, friend);
    return dispatch => {
        dispatch({ type: SAVING_FRIEND });
        post
            .then(({ data }) => {
                dispatch({ type: FRIEND_SAVED, payload: data })
            })
            .catch(err => {
                dispatch({ type: ERROR_FETCHING, payload: err })
            })
    }
}

export const deleteFriend = id => {
    const del = axios.delete(`http://localhost:5000/api/friends/${id}`);
    return dispatch => {
        dispatch({ type: DELETING_FRIEND });
        del
            .then(({ data }) => {
                dispatch({ type: FRIEND_DELETED, payload: data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: ERROR_FETCHING, payload: err })
            })
    }
}
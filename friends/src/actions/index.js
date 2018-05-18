import axios from "axios";

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';

export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const ERROR = 'ERROR';


export const fetchingFriends = () => {
    const getData = axios.get(`http://localhost:5000/api/friends`);
    return function(dispatch) {
        dispatch({type: FETCHING_FRIENDS});
        getData
            .then(response => {
                dispatch({type: FRIENDS_FETCHED, payload: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
};

export const addFriend = (friend) => {
    const postData = axios.post(`http://localhost:5000/api/friends`, friend);
    return function(dispatch) {
        dispatch({type: SAVING_FRIEND})
        postData
            .then(response => {
                dispatch({type: FRIEND_SAVED, payload: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
};

export const updateFriend = (friend) => {
    const putData = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    return function(dispatch) {
        dispatch({type: UPDATING_FRIEND})
        putData
            .then(response => {
                dispatch({type: FRIEND_UPDATED, payload: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const deleteFriend = (friend) => {
    const deleteData = axios.delete(`http://localhost:5000/api/friends/${friend.id}`);
    return function(dispatch) {
        dispatch({type: DELETING_FRIEND})
        deleteData 
            .then(response => {
                dispatch({type: FRIEND_DELETED, payload: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}
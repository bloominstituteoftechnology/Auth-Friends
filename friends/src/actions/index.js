import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';


export const fetchingFriends = () => {
    return {
        type: FETCHING_FRIENDS,
    }
}

export const friendsFetched = (data) => {
    return {
        type: FRIENDS_FETCHED,
        payload: data
    }
}

export const savingFriends = () => {
    return {
        type: SAVING_FRIENDS
    }
}

export const friendsSaved = (data) => {
    return {
        type: FRIENDS_SAVED,
        payload: data
    }
}

export const updatingFriend = () => {
    return {
        type: UPDATING_FRIEND
    }
}

export const friendUpdated = () => {
    return {
        type: FRIEND_UPDATED
    }
}

export const deletingFriend = () => {
    return {
        type: DELETING_FRIEND
    }
}

export const friendDeleted = () => {
    return {
        type: FRIEND_DELETED
    }
}

export const error = (data) => {
    return {
        type: ERROR,
        payload: data
    }
}

export const fetchData = () => {
    const getFriend = axios.get('http://localhost:5000/api/friends/');
    return function (dispatch) {
        dispatch(fetchingFriends());
        getFriend
            .then(response => dispatch(friendsFetched(response.data)))
            .catch(err => dispatch(error(error)))
    }
}

export const addData = (obj) => {
    const addFriend = axios.post('http://localhost:5000/api/friends/', obj);
    return function (dispatch) {
        dispatch(savingFriends());
        addFriend
            .then(response => dispatch(friendsSaved(response.data)))
            .catch(err => dispatch(error(error)))
    }
}
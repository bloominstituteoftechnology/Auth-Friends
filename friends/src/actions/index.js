import axios from 'axios'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const SAVED_FRIENDS = 'SAVED_FRIENDS';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const UPDATED_FRIENDS = 'UPDATED_FRIENDS';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const DELETED_FRIENDS = 'DELETED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    // Return function which dispatched 
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS })
        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({ type: FETCHED_FRIENDS, payload: res.data})
            })
            .catch(error => {
                dispatch({type: ERROR})
            })
    }
}

export const addFriend = friend => {
    return dispatch => {
       dispatch ({ type: SAVING_FRIENDS })
       axios.post('http://localhost:5000/api/friends', {
            name: friend.name,
            age: friend.age,
            email: friend.email
        })
        .then(res => {
            dispatch({ type: SAVED_FRIENDS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err})
        })
    }
}

export const updateFriend = friend => {
    return dispatch => {

    }
}

export const deleteFriend = friend => {
    return dispatch => {

    }
}
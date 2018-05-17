import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

const fetching = () => {
    return {
        type: FETCHING
    }
}

const fetched = (data) => {
    return {
        type: FETCHED,
        payload: data
    }
}

const saving = () => {
    return {
        type: SAVING
    }
}

const saved = (data) => {
    return {
        type: SAVED,
        payload: data
    }
}

const updating = () => {
    return {
        type: UPDATING
    }
}

const updated = () => {
    return {
        type: UPDATED
    }
}

const deleting = () => {
    return {
        type: DELETING
    }
}

const deleted = () => {
    return {
        type: DELETED
    }
}

const error = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    // console.log("fetching friends... ")
    return function(dispatch) {
        dispatch(fetching());
        getFriends
            .then( res => {
                // console.log("result of get request: ", res.data)
                dispatch(fetched(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const createFriend = (friend) => {
    const addFriend = axios.post('http://localhost:5000/api/friends', friend);
    return function(dispatch) {
        dispatch(saving());
        addFriend
            .then( res => {
                dispatch(saved(res.data))
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const updateFriend = (friend) => {
    const changeFriend = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    return function(dispatch) {
        dispatch(updating())
        changeFriend
            .then( res  => {
                dispatch(updated(res));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const deleteFriend = (friend) => {
    const removeFriend = axios.delete(`http://localhost:5000/api/friends/${friend.id}`)
    return function(dispatch) {
        dispatch(deleting())
        removeFriend 
            .then( res => {
                dispatch(deleted(res));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}
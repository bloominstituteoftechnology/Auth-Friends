import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const POSTING_FRIENDS = 'POSTING_FRIENDS';
export const FRIENDS_POSTED = 'FRIEND_POSTED';

export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const FRIENDS_UPDATED = 'FRIENDS_UPDATED'; 

export const DELETING_FRIENDS = 'DELETING FRIENDS';
export const FRIENDS_DELETED = 'FRIENDS_DELETED'; 

export const ERROR = 'ERROR'; 

export const getFriends = () => {
    const request = axios.get('http://localhost:5000/api/friends');
    return (dispatch) => {
        dispatch({type:FETCHING_FRIENDS})// here we are going trun fetchingFriends to true because we are attempting to get them. 
        request.then((response) => {
            dispatch({type: FRIENDS_FETCHED, payload: response.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type:ERROR, error: error})
        });
    };
};


export const postFriends = friend => {
    const request = axios.post('http://localhost:5000/api/friends', friend);// friend will be an object with properties. 
    return (dispatch) => {
        dispatch({type:POSTING_FRIENDS}) 
        request.then(response => {
            dispatch({type: FRIENDS_POSTED, payload: response.data}) // we want the data we passed back.. 
        })
        .catch(error => {
            console.log(error)
            dispatch({type:ERROR, payload: error})
        })
    }
}

export const updateFriends = (id, data) => {
    const request = axios.post(`http://localhost:5000/api/friends${id}`, data)
    return (dispatch) => {
        dispatch({type:UPDATING_FRIENDS})
        request.then(response => {
            dispatch({type: FRIENDS_UPDATED, payload: response.data})
        })
        .catch(error => {
            dispatch({type:ERROR, payload: error})
        })
    }
}

export const deleteFriends = id => {
    const request = axios.post(`http://localhost:5000/api/friends${id}`)
    return (dispatch) => {
        dispatch({type: DELETING_FRIENDS}) 
        request.then(response => {
            dispatch({type: FRIENDS_DELETED, payload: response.data})
        })
        .catch(error => {
            dispatch({type:ERROR, payload: error})
        })
    }
}
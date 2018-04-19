import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED'
export const SAVING_FRIENDS = 'SAVING_FRIENDS'
export const FRIENDS_SAVED = 'FRIENDS_SAVED'
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS'
export const FRIENDS_UPDATED = 'FRIENDS_UPDATED'
export const DELETING_FRIENDS = 'DELETING_FRIENDS'
export const FRIENDS_DELETED = 'FRIENDS_DELETED'
export const ERROR = 'ERROR'

'http://localhost:5000/api/friends';

export function fetchFriends() {
    return(dispatch) => {
        dispatch({type: FETCHING_FRIENDS})
        axios.get('http://localhost:5000/api/friends')
        .then((response) => {
            dispatch({type: FRIENDS_FETCHED, payload: response.data })
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err })
        });
    };
};

export const saveFriend = (newFriend) => dispatch => {
    dispatch({ type: SAVING_FRIENDS });
    axios.post('http://localhost:5000/api/friends', newFriend)
       .then(response => {
           dispatch({ type: FRIENDS_SAVED, payload: response.data })
       })
       .catch(err => {
           dispatch({ type: ERROR, payload: err })
       });
};

export const updateFriend = (id, friend) => dispatch => {
    dispatch({ type: UPDATING_FRIENDS});
    axios
       .put(`http://:localhost:5000/api/friends/${id}`, friend )
       .then(response => {
           dispatch({ type: FRIENDS_UPDATED, payload: response.data})
       })
       .catch(err => {
           dispatch({ type: ERROR, payload: err})
       });
};

export const deleteFriend = (id) => dispatch => {
    dispatch({ type: DELETING_FRIENDS });
    axios 
       .delete(`http://:localhost:5000/api/friends/${id}`)
       .then(response => {
           dispatch({ type: FRIENDS_DELETED, payload: response.data})
       })
       .catch(err => {
           dispatch({ type: ERROR, payload: err})
       });
};
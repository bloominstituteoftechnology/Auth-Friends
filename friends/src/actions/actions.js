import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const ADDED_FRIENDS = 'ADDED_FRIENDS';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const UPDATED_FRIENDS = 'UPDATED_FRIENDS';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const DELETED_FRIENDS = 'DELETED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return dispatch =>{
        dispatch({type:FETCHING_FRIENDS});
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
                dispatch({type: FETCHED_FRIENDS, payload: response.data});
            })
            .catch(err=>{
                dispatch({type: ERROR, payload: err});
            })
    }
}

export const addFriends = (name, age, email) => {
    return dispatch =>{
        dispatch({type:ADDING_FRIENDS});
        axios
            .post('http://localhost:5000/api/friends', {
                name: name,
                age: age,
                email: email
            })
            .then(response => {
                dispatch({type: ADDED_FRIENDS, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const updateFriends = (name, age, email, id) => {
    return dispatch =>{
        dispatch({type: UPDATING_FRIENDS});
        axios
            .put(`http://localhost:5000/api/friends/${id}`,{
                name: name,
                age: age,
                email: email
            })
            .then(response => {
                dispatch({type: UPDATED_FRIENDS, payload: response.data});
            })
            .catch(err=>{
                dispatch({type: ERROR, payload: err});
            })
    }
}

export const deleteFriends = id => {
    return dispatch =>{
        dispatch({type: DELETING_FRIENDS});
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                dispatch({type: DELETED_FRIENDS, payload: response.data});
            })
            .catch(err=>{
                dispatch({type: ERROR, payload: err});
            })
    }
 }
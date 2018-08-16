import {ADDING_FRIEND, ADDED_FRIEND, UPDATED_FRIEND, UPDATING_FRIEND, DELETED_FRIEND, DELETING_FRIEND, FETCHING_FRIEND, FETCHED_FRIEND } from './types.js';

/**
 *  {
    id: 1
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
  {
 */

const URL = `http://localhost:5000/api/friends`;


export const getFriend = (friend) => {
    const promise = axios.get(URL + `/${friend}`);
    return (dispatch) {
        dispatch({ type: FETCHING_FRIEND });
        promise
            .then((res) => {
                dispatch({ type: FETCHED_FRIEND, payload: res.data });
            })
            .catch(err => { type: ERROR });
    }
}

export const addFriend = (friend) => {
    const promise = axios.post(URL + `/${friend}`, {
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email,
    })
    return (dispatch) {
        dispatch({type: ADDING_FRIEND});
        promise
            .then((res)=>{
                dispatch({type: ADDED_FRIEND, payload: res.data});
            })
            .catch(err => { type: ERROR });
    }
   
}

export const updateFriend = (friend) => {
    const promise = axios.post(URL + `/${friend.id}`, {
        name: friend.name,
        age: friend.age,
        email: friend.email,
    })
    return (dispatch) {
        dispatch({ type: UPDATING_FRIEND });
        promise
            .then((res) => {
                dispatch({ type: UPDATED_FRIEND, payload: res.data });
            })
            .catch(err => { type: ERROR });
    }
}

export const deleteFriend = (friend) => {
    const promise = axios.delete(URL + `/${friend.id}`, {
        name: friend.name,
        age: friend.age,
        email: friend.email,
    });
    return (dispatch) {
        dispatch({ type: DELETING_FRIEND });
        promise
            .then((res) => {
                dispatch({ type: DELETED_FRIEND, payload: res.data });
            })
            .catch(err => { type: ERROR });
    }
}